import { createTRPCRouter, adminProcedure } from "~/server/api/trpc";

export const analyticsRouter = createTRPCRouter({
  getOverview: adminProcedure.query(async ({ ctx }) => {
    const [totalUsers, totalProducts, totalLicenses, totalAssets] =
      await Promise.all([
        ctx.db.user.count(),
        ctx.db.product.count(),
        ctx.db.userLicense.count(),
        ctx.db.productAsset.count(),
      ]);

    const now = new Date();
    const [newUsers7d, newUsers30d] = await Promise.all([
      ctx.db.user.count({
        where: {
          createdAt: { gte: new Date(now.getTime() - 7 * 86400000) },
        },
      }),
      ctx.db.user.count({
        where: {
          createdAt: { gte: new Date(now.getTime() - 30 * 86400000) },
        },
      }),
    ]);

    return {
      totalUsers,
      totalProducts,
      totalLicenses,
      totalAssets,
      newUsers7d,
      newUsers30d,
    };
  }),

  getUserGrowth: adminProcedure.query(async ({ ctx }) => {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 86400000);
    const users = await ctx.db.user.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: { createdAt: true },
      orderBy: { createdAt: "asc" },
    });

    // Group by date
    const grouped: Record<string, number> = {};
    for (const u of users) {
      const date = u.createdAt.toISOString().split("T")[0]!;
      grouped[date] = (grouped[date] ?? 0) + 1;
    }

    return Object.entries(grouped).map(([date, count]) => ({ date, count }));
  }),

  getLicenseClaims: adminProcedure.query(async ({ ctx }) => {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 86400000);
    const licenses = await ctx.db.userLicense.findMany({
      where: { claimedAt: { gte: thirtyDaysAgo } },
      select: { claimedAt: true },
      orderBy: { claimedAt: "asc" },
    });

    const grouped: Record<string, number> = {};
    for (const l of licenses) {
      const date = l.claimedAt.toISOString().split("T")[0]!;
      grouped[date] = (grouped[date] ?? 0) + 1;
    }

    return Object.entries(grouped).map(([date, count]) => ({ date, count }));
  }),

  getTopProducts: adminProcedure.query(async ({ ctx }) => {
    return ctx.db.product.findMany({
      orderBy: { claimedLicenses: "desc" },
      take: 10,
      select: {
        id: true,
        name: true,
        claimedLicenses: true,
        totalLicenses: true,
        category: true,
      },
    });
  }),

  getPlatformDistribution: adminProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.user.findMany({
      where: { onboardingCompleted: true },
      select: { sellingPlatforms: true },
    });
    const counts: Record<string, number> = {};
    for (const u of users) {
      for (const p of u.sellingPlatforms) {
        counts[p] = (counts[p] ?? 0) + 1;
      }
    }
    return Object.entries(counts)
      .map(([platform, count]) => ({ platform, count }))
      .sort((a, b) => b.count - a.count);
  }),
});
