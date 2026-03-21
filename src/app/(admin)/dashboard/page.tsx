"use client";

import { api } from "~/trpc/react";
import {
  Card,
  CardContent,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "~/components/ui/chart";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

const userGrowthConfig: ChartConfig = {
  count: { label: "New Users", color: "var(--chart-1)" },
};

const licenseClaimsConfig: ChartConfig = {
  count: { label: "Claims", color: "var(--chart-2)" },
};

const topProductsConfig: ChartConfig = {
  claimedLicenses: { label: "Claimed", color: "var(--chart-3)" },
};

const platformConfig: ChartConfig = {
  count: { label: "Users", color: "var(--chart-4)" },
};

const STAT_ACCENTS = [
  "border-l-green-500",
  "border-l-blue-500",
  "border-l-amber-500",
  "border-l-violet-500",
] as const;

export default function DashboardPage() {
  const overview = api.analytics.getOverview.useQuery();
  const userGrowth = api.analytics.getUserGrowth.useQuery();
  const licenseClaims = api.analytics.getLicenseClaims.useQuery();
  const topProducts = api.analytics.getTopProducts.useQuery();
  const platformDist = api.analytics.getPlatformDistribution.useQuery();

  const stats = [
    { label: "Total Users", value: overview.data?.totalUsers },
    { label: "Total Products", value: overview.data?.totalProducts },
    { label: "Total Licenses", value: overview.data?.totalLicenses },
    { label: "New Users (7d)", value: overview.data?.newUsers7d },
  ];

  return (
    <div className="space-y-5">
      <p className="text-sm font-medium">Overview</p>

      {/* Stat Cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card
            key={stat.label}
            className={`border-l-2 ${STAT_ACCENTS[i]} bg-card transition-colors hover:border-foreground/20`}
          >
            <CardContent className="py-4">
              {overview.isPending ? (
                <Skeleton className="h-9 w-20" />
              ) : (
                <p className="font-mono text-3xl font-bold tabular-nums">
                  {stat.value?.toLocaleString() ?? 0}
                </p>
              )}
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-3 lg:grid-cols-2">
        <Card className="bg-card">
          <CardContent className="pt-4">
            <p className="mb-3 text-sm font-medium">
              User Growth{" "}
              <span className="text-muted-foreground">— last 30 days</span>
            </p>
            {userGrowth.isPending ? (
              <Skeleton className="h-[250px] w-full" />
            ) : userGrowth.data?.length ? (
              <ChartContainer config={userGrowthConfig} className="h-[250px]">
                <LineChart data={userGrowth.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(v: string) =>
                      new Date(v).toLocaleDateString("en", {
                        month: "short",
                        day: "numeric",
                      })
                    }
                    fontSize={11}
                    className="font-mono"
                  />
                  <YAxis fontSize={11} className="font-mono" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="var(--color-count)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            ) : (
              <div className="flex h-[250px] items-center justify-center text-sm text-muted-foreground">
                No data available
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="pt-4">
            <p className="mb-3 text-sm font-medium">
              License Claims{" "}
              <span className="text-muted-foreground">— last 30 days</span>
            </p>
            {licenseClaims.isPending ? (
              <Skeleton className="h-[250px] w-full" />
            ) : licenseClaims.data?.length ? (
              <ChartContainer config={licenseClaimsConfig} className="h-[250px]">
                <LineChart data={licenseClaims.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(v: string) =>
                      new Date(v).toLocaleDateString("en", {
                        month: "short",
                        day: "numeric",
                      })
                    }
                    fontSize={11}
                    className="font-mono"
                  />
                  <YAxis fontSize={11} className="font-mono" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="var(--color-count)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            ) : (
              <div className="flex h-[250px] items-center justify-center text-sm text-muted-foreground">
                No data available
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-3 lg:grid-cols-2">
        <Card className="bg-card">
          <CardContent className="pt-4">
            <p className="mb-3 text-sm font-medium">
              Top Products{" "}
              <span className="text-muted-foreground">— most claimed</span>
            </p>
            {topProducts.isPending ? (
              <Skeleton className="h-[250px] w-full" />
            ) : topProducts.data?.length ? (
              <ChartContainer config={topProductsConfig} className="h-[250px]">
                <BarChart data={topProducts.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    fontSize={11}
                    className="font-mono"
                    tickFormatter={(v: string) =>
                      v.length > 12 ? v.slice(0, 12) + "..." : v
                    }
                  />
                  <YAxis fontSize={11} className="font-mono" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="claimedLicenses"
                    fill="var(--color-claimedLicenses)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            ) : (
              <div className="flex h-[250px] items-center justify-center text-sm text-muted-foreground">
                No data available
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="pt-4">
            <p className="mb-3 text-sm font-medium">
              Platform Distribution{" "}
              <span className="text-muted-foreground">— selling platforms</span>
            </p>
            {platformDist.isPending ? (
              <Skeleton className="h-[250px] w-full" />
            ) : platformDist.data?.length ? (
              <ChartContainer config={platformConfig} className="h-[250px]">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Pie
                    data={platformDist.data}
                    dataKey="count"
                    nameKey="platform"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={45}
                    label={({ platform }: { platform: string }) => platform}
                  >
                    {platformDist.data.map((_, index) => (
                      <Cell
                        key={index}
                        fill={CHART_COLORS[index % CHART_COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            ) : (
              <div className="flex h-[250px] items-center justify-center text-sm text-muted-foreground">
                No data available
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
