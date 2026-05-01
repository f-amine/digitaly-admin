import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { generateObject } from "ai";
import { Prisma } from "../../../../generated/prisma";

import { createTRPCRouter, adminProcedure } from "~/server/api/trpc";
import { geminiText, isGeminiTextConfigured } from "~/server/ai/gemini-text";
import { marketingKitSchema } from "~/lib/marketing-kit/schema";
import {
  MARKETING_KIT_SYSTEM_PROMPT,
  buildMarketingKitUserMessage,
} from "~/lib/marketing-kit/prompt";

const personaInputSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  pains: z.array(z.string().min(1)),
  desires: z.array(z.string().min(1)),
});

const hookInputSchema = z.object({
  angle: z.string().min(1),
  text: z.string().min(1),
});

const adCopyInputSchema = z.object({
  platform: z.string().min(1),
  headline: z.string().optional(),
  primaryText: z.string().min(1),
  cta: z.string().optional(),
});

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
        isFreeProduct: z.boolean().default(false),
        totalLicenses: z.number().min(1).default(100),
        claimedLicenses: z.number().int().min(0).default(0),
        category: z.string().default("general"),
        featured: z.boolean().default(false),
        difficulty: z
          .enum(["BEGINNER", "FAST_LAUNCH", "ADVANCED"])
          .default("BEGINNER"),
        sellingPlatforms: z.array(z.string()).default([]),
        languages: z.array(z.string()).default([]),
        demandLabel: z.string().optional().nullable(),
        exclusiveLicensePrice: z.number().optional().nullable(),
        exclusiveLicenseSold: z.boolean().default(false),
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
          isFreeProduct: z.boolean().optional(),
          totalLicenses: z.number().min(1).optional(),
          claimedLicenses: z.number().int().min(0).optional(),
          category: z.string().optional(),
          featured: z.boolean().optional(),
          difficulty: z
            .enum(["BEGINNER", "FAST_LAUNCH", "ADVANCED"])
            .optional(),
          sellingPlatforms: z.array(z.string()).optional(),
          languages: z.array(z.string()).optional(),
          demandLabel: z.string().optional().nullable(),
          exclusiveLicensePrice: z.number().optional().nullable(),
          exclusiveLicenseSold: z.boolean().optional(),
          targetAudience: z.array(personaInputSchema).nullable().optional(),
          marketingHooks: z.array(hookInputSchema).nullable().optional(),
          adCopies: z.array(adCopyInputSchema).nullable().optional(),
        }),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { targetAudience, marketingHooks, adCopies, ...rest } = input.data;
      const data: Prisma.ProductUpdateInput = { ...rest };
      if (targetAudience !== undefined) {
        data.targetAudience =
          targetAudience === null
            ? Prisma.JsonNull
            : (targetAudience as Prisma.InputJsonValue);
      }
      if (marketingHooks !== undefined) {
        data.marketingHooks =
          marketingHooks === null
            ? Prisma.JsonNull
            : (marketingHooks as Prisma.InputJsonValue);
      }
      if (adCopies !== undefined) {
        data.adCopies =
          adCopies === null
            ? Prisma.JsonNull
            : (adCopies as Prisma.InputJsonValue);
      }
      return ctx.db.product.update({
        where: { id: input.id },
        data,
      });
    }),

  generateMarketingKit: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      if (!isGeminiTextConfigured()) {
        throw new TRPCError({
          code: "PRECONDITION_FAILED",
          message: "GEMINI_API_KEY not configured",
        });
      }

      const product = await ctx.db.product.findUniqueOrThrow({
        where: { id: input.id },
        select: {
          name: true,
          shortDescription: true,
          description: true,
          category: true,
          difficulty: true,
          sellingPlatforms: true,
          languages: true,
          assets: {
            select: {
              name: true,
              type: true,
              fileUrl: true,
              fileSize: true,
            },
          },
        },
      });

      // Pull up to MAX_PDFS PDF assets, total under MAX_TOTAL_BYTES, to ground
      // generation in actual product content rather than internal description.
      const MAX_PDFS = 4;
      const MAX_PER_FILE_BYTES = 8 * 1024 * 1024; // 8 MB
      const MAX_TOTAL_BYTES = 18 * 1024 * 1024; // 18 MB

      const isPdfUrl = (url: string) =>
        /\.pdf(\?|$)/i.test(url) || url.toLowerCase().includes("/pdf/");

      const candidates = product.assets.filter(
        (a) => isPdfUrl(a.fileUrl) && /^https?:\/\//i.test(a.fileUrl),
      );

      const pdfFiles: {
        name: string;
        type: string;
        bytes: Uint8Array;
      }[] = [];
      let totalBytes = 0;

      for (const asset of candidates) {
        if (pdfFiles.length >= MAX_PDFS) break;
        try {
          const res = await fetch(asset.fileUrl);
          if (!res.ok) continue;
          const buf = new Uint8Array(await res.arrayBuffer());
          if (buf.byteLength > MAX_PER_FILE_BYTES) continue;
          if (totalBytes + buf.byteLength > MAX_TOTAL_BYTES) break;
          totalBytes += buf.byteLength;
          pdfFiles.push({ name: asset.name, type: asset.type, bytes: buf });
        } catch {
          // Skip unreachable / errored asset
        }
      }

      const assetSummary = product.assets.map((a) => ({
        name: a.name,
        type: a.type,
        size: a.fileSize ?? null,
        attachedToPrompt: pdfFiles.some((p) => p.name === a.name),
      }));

      const userMessage = buildMarketingKitUserMessage({
        ...product,
        assetSummary,
        attachedPdfCount: pdfFiles.length,
      });

      const userContent: (
        | { type: "text"; text: string }
        | { type: "file"; data: Uint8Array; mediaType: string; filename?: string }
      )[] = [{ type: "text", text: userMessage }];

      for (const pdf of pdfFiles) {
        userContent.push({
          type: "file",
          data: pdf.bytes,
          mediaType: "application/pdf",
          filename: pdf.name,
        });
      }

      const result = await generateObject({
        model: geminiText,
        schema: marketingKitSchema,
        system: MARKETING_KIT_SYSTEM_PROMPT,
        messages: [{ role: "user", content: userContent }],
        maxOutputTokens: 2400,
      });

      return ctx.db.product.update({
        where: { id: input.id },
        data: {
          targetAudience: result.object.targetAudience,
          marketingHooks: result.object.marketingHooks,
          adCopies: result.object.adCopies,
        },
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
