import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { adminProcedure, createTRPCRouter } from "~/server/api/trpc";

export const couponsRouter = createTRPCRouter({
  list: adminProcedure
    .input(
      z
        .object({
          partnerId: z.string().optional(),
          active: z.boolean().optional(),
          search: z.string().optional(),
          limit: z.number().default(100),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const where: {
        partnerId?: string;
        active?: boolean;
        OR?: Array<Record<string, unknown>>;
      } = {};
      if (input?.partnerId) where.partnerId = input.partnerId;
      if (input?.active !== undefined) where.active = input.active;
      if (input?.search) {
        const q = input.search.trim();
        where.OR = [
          { code: { contains: q, mode: "insensitive" } },
          { partner: { fullName: { contains: q, mode: "insensitive" } } },
          { partner: { email: { contains: q, mode: "insensitive" } } },
          { partner: { slug: { contains: q, mode: "insensitive" } } },
        ];
      }
      return ctx.db.coupon.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: input?.limit ?? 100,
        include: {
          partner: { select: { id: true, fullName: true, slug: true, email: true } },
          _count: { select: { redemptions: true } },
        },
      });
    }),

  setActive: adminProcedure
    .input(z.object({ id: z.string(), active: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.coupon.update({
        where: { id: input.id },
        data: { active: input.active },
      });
    }),

  update: adminProcedure
    .input(
      z.object({
        id: z.string(),
        code: z
          .string()
          .min(2)
          .max(64)
          .regex(/^[A-Z0-9-_]+$/, "Use uppercase letters, digits, '-' or '_'")
          .optional(),
        discountType: z.enum(["PERCENT", "FIXED"]).optional(),
        discountValue: z.number().int().min(1).max(100_000).optional(),
        active: z.boolean().optional(),
        expiresAt: z.date().nullable().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const current = await ctx.db.coupon.findUniqueOrThrow({
        where: { id: input.id },
      });

      if (input.code && input.code !== current.code) {
        const taken = await ctx.db.coupon.findUnique({
          where: { code: input.code },
          select: { id: true },
        });
        if (taken && taken.id !== current.id) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Coupon code already in use",
          });
        }
      }
      if (
        input.discountType === "PERCENT" &&
        input.discountValue !== undefined &&
        input.discountValue > 100
      ) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Percent discount must be 1-100",
        });
      }

      const codeOrDiscountChanged =
        (input.code && input.code !== current.code) ||
        (input.discountType && input.discountType !== current.discountType) ||
        (input.discountValue !== undefined &&
          input.discountValue !== current.discountValue);

      return ctx.db.coupon.update({
        where: { id: input.id },
        data: {
          code: input.code,
          discountType: input.discountType,
          discountValue: input.discountValue,
          active: input.active,
          expiresAt: input.expiresAt,
          // Drop cached Stripe coupon so a fresh one is minted on next checkout.
          ...(codeOrDiscountChanged ? { stripeCouponId: null } : {}),
        },
      });
    }),

  createForPartner: adminProcedure
    .input(
      z.object({
        partnerId: z.string(),
        code: z
          .string()
          .min(2)
          .max(64)
          .regex(/^[A-Z0-9-_]+$/, "Use uppercase letters, digits, '-' or '_'"),
        discountType: z.enum(["PERCENT", "FIXED"]),
        discountValue: z.number().int().min(1).max(100_000),
        expiresAt: z.date().nullable().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const taken = await ctx.db.coupon.findUnique({
        where: { code: input.code },
        select: { id: true },
      });
      if (taken) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Coupon code already in use",
        });
      }
      return ctx.db.coupon.create({
        data: {
          partnerId: input.partnerId,
          code: input.code,
          discountType: input.discountType,
          discountValue: input.discountValue,
          expiresAt: input.expiresAt ?? null,
        },
      });
    }),
});
