import { z } from "zod";

import { adminProcedure, createTRPCRouter } from "~/server/api/trpc";

export const payoutsRouter = createTRPCRouter({
  list: adminProcedure
    .input(
      z
        .object({
          partnerId: z.string().optional(),
          status: z.enum(["PENDING", "PAID", "FAILED"]).optional(),
          limit: z.number().default(100),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      return ctx.db.payout.findMany({
        where: {
          partnerId: input?.partnerId,
          status: input?.status,
        },
        orderBy: { createdAt: "desc" },
        take: input?.limit ?? 100,
        include: {
          partner: {
            select: {
              id: true,
              fullName: true,
              email: true,
              slug: true,
              payoutDetails: true,
            },
          },
        },
      });
    }),

  create: adminProcedure
    .input(
      z.object({
        partnerId: z.string(),
        amountCents: z.number().int().positive(),
        currency: z.string().default("USD"),
        method: z.string(),
        reference: z.string().optional(),
        notes: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.payout.create({ data: input });
    }),

  markPaid: adminProcedure
    .input(z.object({ id: z.string(), reference: z.string().optional() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.payout.update({
        where: { id: input.id },
        data: {
          status: "PAID",
          paidAt: new Date(),
          reference: input.reference,
        },
      });
    }),

  markFailed: adminProcedure
    .input(z.object({ id: z.string(), notes: z.string().optional() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.payout.update({
        where: { id: input.id },
        data: { status: "FAILED", notes: input.notes },
      });
    }),
});
