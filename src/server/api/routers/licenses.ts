import { z } from "zod";
import { createTRPCRouter, adminProcedure } from "~/server/api/trpc";

export const licensesRouter = createTRPCRouter({
  list: adminProcedure
    .input(
      z
        .object({
          licenseType: z.enum(["SHARED", "EXCLUSIVE"]).optional(),
          limit: z.number().default(20),
          cursor: z.string().optional(),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const limit = input?.limit ?? 20;
      const where: Record<string, unknown> = {};

      if (input?.licenseType) {
        where.licenseType = input.licenseType;
      }

      const items = await ctx.db.userLicense.findMany({
        where,
        take: limit + 1,
        cursor: input?.cursor ? { id: input.cursor } : undefined,
        orderBy: { claimedAt: "desc" },
        include: {
          user: { select: { id: true, name: true, email: true } },
          product: { select: { id: true, name: true, slug: true } },
        },
      });

      let nextCursor: string | undefined;
      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem?.id;
      }

      return { items, nextCursor };
    }),

  revoke: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.$transaction(async (tx) => {
        const license = await tx.userLicense.delete({
          where: { id: input.id },
        });

        await tx.product.update({
          where: { id: license.productId },
          data: { claimedLicenses: { decrement: 1 } },
        });

        return license;
      });
    }),
});
