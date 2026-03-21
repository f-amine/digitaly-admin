import { z } from "zod";
import { createTRPCRouter, adminProcedure } from "~/server/api/trpc";

export const usersRouter = createTRPCRouter({
  list: adminProcedure
    .input(
      z
        .object({
          search: z.string().optional(),
          role: z.enum(["FREE_USER", "PRO_MEMBER"]).optional(),
          limit: z.number().default(20),
          cursor: z.string().optional(),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const limit = input?.limit ?? 20;
      const where: Record<string, unknown> = {};

      if (input?.search) {
        where.OR = [
          { name: { contains: input.search, mode: "insensitive" } },
          { email: { contains: input.search, mode: "insensitive" } },
        ];
      }
      if (input?.role) {
        where.role = input.role;
      }

      const items = await ctx.db.user.findMany({
        where,
        take: limit + 1,
        cursor: input?.cursor ? { id: input.cursor } : undefined,
        orderBy: { createdAt: "desc" },
        include: {
          _count: { select: { licenses: true } },
        },
      });

      let nextCursor: string | undefined;
      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem?.id;
      }

      return { items, nextCursor };
    }),

  getById: adminProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.user.findUniqueOrThrow({
        where: { id: input.id },
        include: {
          licenses: { include: { product: true } },
          integrations: true,
        },
      });
    }),

  updateRole: adminProcedure
    .input(
      z.object({
        id: z.string(),
        role: z.enum(["FREE_USER", "PRO_MEMBER"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: input.id },
        data: { role: input.role },
      });
    }),

  resetFreeLicenses: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: input.id },
        data: { freeLicenseAvailable: 1 },
      });
    }),
});
