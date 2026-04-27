import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { sendApplicationApprovedEmail } from "~/server/email";
import { adminProcedure, createTRPCRouter } from "~/server/api/trpc";

function generateSlug(fullName: string, email: string) {
  const base = (fullName || email.split("@")[0] || "partner")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 16);
  const rand = Math.random().toString(36).slice(2, 6);
  return `${base || "partner"}${rand}`;
}

function generateCouponCode(slug: string) {
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${slug.toUpperCase().slice(0, 10)}-${rand}`;
}

export const applicationsRouter = createTRPCRouter({
  list: adminProcedure
    .input(
      z
        .object({
          status: z.enum(["PENDING", "APPROVED", "REJECTED"]).optional(),
          limit: z.number().default(50),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.partnerApplication.findMany({
        where: input?.status ? { status: input.status } : undefined,
        orderBy: { createdAt: "desc" },
        take: input?.limit ?? 50,
        include: { partner: true },
      });
    }),

  getById: adminProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.partnerApplication.findUniqueOrThrow({
        where: { id: input.id },
        include: { partner: { include: { coupons: true } } },
      });
    }),

  approve: adminProcedure
    .input(
      z.object({
        id: z.string(),
        discountType: z.enum(["PERCENT", "FIXED"]).default("PERCENT"),
        discountValue: z.number().int().min(1).max(100_000).default(15),
        slug: z.string().regex(/^[a-z0-9-]+$/i).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const app = await ctx.db.partnerApplication.findUniqueOrThrow({
        where: { id: input.id },
      });
      if (app.status === "APPROVED") {
        throw new TRPCError({ code: "CONFLICT", message: "Already approved" });
      }

      const slug = (input.slug ?? generateSlug(app.fullName, app.email)).toLowerCase();
      const code = generateCouponCode(slug);

      const result = await ctx.db.$transaction(async (tx) => {
        const updated = await tx.partnerApplication.update({
          where: { id: app.id },
          data: {
            status: "APPROVED",
            reviewedBy: ctx.session.user.id,
            reviewedAt: new Date(),
          },
        });
        const partner = await tx.partner.create({
          data: {
            applicationId: app.id,
            email: app.email,
            fullName: app.fullName,
            slug,
            niche: app.niche,
          },
        });
        const coupon = await tx.coupon.create({
          data: {
            code,
            partnerId: partner.id,
            discountType: input.discountType,
            discountValue: input.discountValue,
          },
        });
        return { application: updated, partner, coupon };
      });

      try {
        await sendApplicationApprovedEmail({
          to: app.email,
          fullName: app.fullName,
          couponCode: result.coupon.code,
          discountLabel:
            input.discountType === "PERCENT"
              ? `${input.discountValue}% off`
              : `$${(input.discountValue / 100).toFixed(2)} off`,
          partnerSlug: result.partner.slug,
        });
      } catch (err) {
        console.error("[applications.approve] email send failed", err);
      }

      return result;
    }),

  reject: adminProcedure
    .input(
      z.object({
        id: z.string(),
        notes: z.string().max(2000).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.partnerApplication.update({
        where: { id: input.id },
        data: {
          status: "REJECTED",
          reviewNotes: input.notes,
          reviewedBy: ctx.session.user.id,
          reviewedAt: new Date(),
        },
      });
    }),
});
