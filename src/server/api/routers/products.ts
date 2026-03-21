import { z } from "zod";
import { createTRPCRouter, adminProcedure } from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  list: adminProcedure
    .input(
      z
        .object({
          search: z.string().optional(),
          category: z.string().optional(),
          featured: z.boolean().optional(),
          limit: z.number().min(1).max(100).default(20),
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
          { description: { contains: input.search, mode: "insensitive" } },
        ];
      }
      if (input?.category) {
        where.category = input.category;
      }
      if (input?.featured !== undefined) {
        where.featured = input.featured;
      }

      const items = await ctx.db.product.findMany({
        where,
        take: limit + 1,
        cursor: input?.cursor ? { id: input.cursor } : undefined,
        orderBy: { createdAt: "desc" },
        include: { assets: true },
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
      return ctx.db.product.findUniqueOrThrow({
        where: { id: input.id },
        include: { assets: true },
      });
    }),

  create: adminProcedure
    .input(
      z.object({
        name: z.string().min(1),
        slug: z.string().min(1),
        description: z.string().min(1),
        shortDescription: z.string().min(1),
        image: z.string().optional(),
        price: z.number().min(0).default(0),
        isFreeProduct: z.boolean().default(false),
        totalLicenses: z.number().min(1).default(100),
        category: z.string().default("general"),
        featured: z.boolean().default(false),
        difficulty: z
          .enum(["BEGINNER", "FAST_LAUNCH", "ADVANCED"])
          .default("BEGINNER"),
        sellingPlatforms: z.array(z.string()).default([]),
        demandLabel: z.string().optional(),
        exclusiveLicensePrice: z.number().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.create({ data: input });
    }),

  update: adminProcedure
    .input(
      z.object({
        id: z.string(),
        data: z.object({
          name: z.string().min(1).optional(),
          slug: z.string().min(1).optional(),
          description: z.string().min(1).optional(),
          shortDescription: z.string().min(1).optional(),
          image: z.string().optional(),
          price: z.number().min(0).optional(),
          isFreeProduct: z.boolean().optional(),
          totalLicenses: z.number().min(1).optional(),
          category: z.string().optional(),
          featured: z.boolean().optional(),
          difficulty: z
            .enum(["BEGINNER", "FAST_LAUNCH", "ADVANCED"])
            .optional(),
          sellingPlatforms: z.array(z.string()).optional(),
          demandLabel: z.string().optional(),
          exclusiveLicensePrice: z.number().optional(),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.update({
        where: { id: input.id },
        data: input.data,
      });
    }),

  delete: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.delete({ where: { id: input.id } });
    }),

  createAsset: adminProcedure
    .input(
      z.object({
        productId: z.string(),
        name: z.string(),
        type: z.string(),
        fileUrl: z.string(),
        fileSize: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.productAsset.create({ data: input });
    }),

  deleteAsset: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.productAsset.delete({ where: { id: input.id } });
    }),
});
