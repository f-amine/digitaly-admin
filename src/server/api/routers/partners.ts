import { z } from "zod";

import { adminProcedure, createTRPCRouter } from "~/server/api/trpc";

export const partnersRouter = createTRPCRouter({
  list: adminProcedure
    .input(
      z
        .object({
          search: z.string().optional(),
          active: z.boolean().optional(),
          limit: z.number().default(50),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const where: Record<string, unknown> = {};
      if (input?.search) {
        where.OR = [
          { fullName: { contains: input.search, mode: "insensitive" } },
          { email: { contains: input.search, mode: "insensitive" } },
          { slug: { contains: input.search, mode: "insensitive" } },
        ];
      }
      if (input?.active !== undefined) where.active = input.active;

      const partners = await ctx.db.partner.findMany({
        where,
        orderBy: { createdAt: "desc" },
        take: input?.limit ?? 50,
        include: {
          _count: { select: { clicks: true, payouts: true } },
          coupons: { where: { active: true }, take: 1 },
        },
      });
      return partners;
    }),

  getById: adminProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const partner = await ctx.db.partner.findUniqueOrThrow({
        where: { id: input.id },
        include: {
          application: true,
          coupons: { include: { _count: { select: { redemptions: true } } } },
          payouts: { orderBy: { createdAt: "desc" } },
          _count: { select: { clicks: true } },
        },
      });
      return partner;
    }),

  setActive: adminProcedure
    .input(z.object({ id: z.string(), active: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.partner.update({
        where: { id: input.id },
        data: { active: input.active },
      });
    }),
});
