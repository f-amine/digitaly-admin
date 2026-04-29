"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import {
  Activity,
  Package,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
} from "lucide-react";

import { Skeleton } from "~/components/ui/skeleton";
import { api } from "~/trpc/react";

const ChartSkeleton = () => <Skeleton className="h-[260px] w-full" />;

const UserGrowthChart = dynamic(
  () => import("./charts").then((m) => m.UserGrowthChart),
  { ssr: false, loading: ChartSkeleton },
);
const LicenseClaimsChart = dynamic(
  () => import("./charts").then((m) => m.LicenseClaimsChart),
  { ssr: false, loading: ChartSkeleton },
);
const TopProductsChart = dynamic(
  () => import("./charts").then((m) => m.TopProductsChart),
  { ssr: false, loading: ChartSkeleton },
);
const PlatformPieChart = dynamic(
  () => import("./charts").then((m) => m.PlatformPieChart),
  { ssr: false, loading: ChartSkeleton },
);

export default function DashboardPage() {
  const overview = api.analytics.getOverview.useQuery();
  const userGrowth = api.analytics.getUserGrowth.useQuery();
  const licenseClaims = api.analytics.getLicenseClaims.useQuery();
  const topProducts = api.analytics.getTopProducts.useQuery();
  const platformDist = api.analytics.getPlatformDistribution.useQuery();

  const stats = useMemo(
    () => [
      { label: "Total users", value: overview.data?.totalUsers, icon: Users },
      { label: "Products", value: overview.data?.totalProducts, icon: Package },
      {
        label: "Licenses claimed",
        value: overview.data?.totalLicenses,
        icon: ShieldCheck,
      },
      {
        label: "New users · 7d",
        value: overview.data?.newUsers7d,
        icon: UserPlus,
        accent: true,
      },
    ],
    [
      overview.data?.totalUsers,
      overview.data?.totalProducts,
      overview.data?.totalLicenses,
      overview.data?.newUsers7d,
    ],
  );

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#efefef] bg-white px-3 py-1 text-[11px] font-medium text-[#888] dark:border-[#1f1f1f] dark:bg-[#111111]">
          <Sparkles className="h-3 w-3 text-[#E8431A]" />
          Snapshot
        </div>
        <h1 className="text-[36px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[44px]">
          The KitsWand <span className="text-[#E8431A]">control room.</span>
        </h1>
        <p className="text-muted-foreground mt-1 max-w-md text-[14px]">
          Live counts, growth charts, and partner activity at a glance.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Stat
            key={s.label}
            label={s.label}
            value={overview.isPending ? null : (s.value ?? 0)}
            icon={s.icon}
            accent={s.accent}
          />
        ))}
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="User growth" subtitle="last 30 days" icon={TrendingUp}>
          {userGrowth.isPending ? (
            <ChartSkeleton />
          ) : userGrowth.data?.length ? (
            <UserGrowthChart data={userGrowth.data} />
          ) : (
            <Empty>No signups in the last 30 days.</Empty>
          )}
        </ChartCard>

        <ChartCard title="License claims" subtitle="last 30 days" icon={Activity}>
          {licenseClaims.isPending ? (
            <ChartSkeleton />
          ) : licenseClaims.data?.length ? (
            <LicenseClaimsChart data={licenseClaims.data} />
          ) : (
            <Empty>No claims in the last 30 days.</Empty>
          )}
        </ChartCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        <ChartCard
          title="Top products"
          subtitle="by claimed licenses"
          icon={Package}
          className="lg:col-span-3"
        >
          {topProducts.isPending ? (
            <ChartSkeleton />
          ) : topProducts.data?.length ? (
            <TopProductsChart data={topProducts.data} />
          ) : (
            <Empty>No product data.</Empty>
          )}
        </ChartCard>

        <ChartCard
          title="Platforms"
          subtitle="distribution"
          icon={Users}
          className="lg:col-span-2"
        >
          {platformDist.isPending ? (
            <ChartSkeleton />
          ) : platformDist.data?.length ? (
            <PlatformPieChart data={platformDist.data} />
          ) : (
            <Empty>No platform data.</Empty>
          )}
        </ChartCard>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string;
  value: number | null;
  icon: React.ElementType;
  accent?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-5 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-0.5 ${
        accent
          ? "border-[#E8431A]/30 bg-gradient-to-br from-[#fff4f1] to-white dark:border-[#E8431A]/40 dark:from-[#E8431A]/15 dark:to-[#111111]"
          : "border-[#efefef] bg-white dark:border-[#1f1f1f] dark:bg-[#111111]"
      }`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            accent
              ? "bg-white/70 dark:bg-[#0f0f0f]"
              : "bg-[#fff4f1] dark:bg-[#E8431A]/15"
          }`}
        >
          <Icon className="h-5 w-5 text-[#E8431A]" />
        </div>
      </div>
      <div className="mt-5">
        <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#888]">
          {label}
        </div>
        <div
          className={`mt-1 text-[34px] font-bold leading-none tracking-[-0.04em] tabular-nums ${
            accent ? "text-[#E8431A]" : ""
          }`}
        >
          {value === null ? (
            <Skeleton className="h-9 w-20" />
          ) : (
            value.toLocaleString()
          )}
        </div>
      </div>
    </div>
  );
}

function ChartCard({
  title,
  subtitle,
  icon: Icon,
  className = "",
  children,
}: {
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#efefef] bg-white p-5 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.04)] dark:border-[#1f1f1f] dark:bg-[#111111] ${className}`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#fff4f1] dark:bg-[#E8431A]/15">
          <Icon className="h-4 w-4 text-[#E8431A]" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-[14px] font-bold tracking-[-0.02em]">{title}</h2>
          {subtitle && (
            <span className="text-[11px] text-[#888]">{subtitle}</span>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[260px] items-center justify-center text-sm text-muted-foreground">
      {children}
    </div>
  );
}
