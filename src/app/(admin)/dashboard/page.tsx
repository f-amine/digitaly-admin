"use client";

import {
  Activity,
  Package,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Skeleton } from "~/components/ui/skeleton";
import { api } from "~/trpc/react";

const PIE_COLORS = [
  "#E8431A",
  "#FF8C5A",
  "#22c55e",
  "#3b82f6",
  "#a855f7",
  "#f59e0b",
  "#888888",
];

export default function DashboardPage() {
  const overview = api.analytics.getOverview.useQuery();
  const userGrowth = api.analytics.getUserGrowth.useQuery();
  const licenseClaims = api.analytics.getLicenseClaims.useQuery();
  const topProducts = api.analytics.getTopProducts.useQuery();
  const platformDist = api.analytics.getPlatformDistribution.useQuery();

  const stats = [
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
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}
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

      {/* Stat tiles */}
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

      {/* Charts grid */}
      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard
          title="User growth"
          subtitle="last 30 days"
          icon={TrendingUp}
        >
          {userGrowth.isPending ? (
            <Skeleton className="h-[260px] w-full" />
          ) : userGrowth.data?.length ? (
            <ResponsiveContainer width="100%" height={260}>
              <LineChart
                data={userGrowth.data}
                margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="usersLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#E8431A" />
                    <stop offset="100%" stopColor="#FF8C5A" />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="currentColor"
                  opacity={0.07}
                />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 11, fill: "#888" }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v: string) =>
                    new Date(v).toLocaleDateString("en", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#888" }}
                  tickLine={false}
                  axisLine={false}
                  width={32}
                />
                <Tooltip content={<KwTooltip />} cursor={{ stroke: "#E8431A", strokeOpacity: 0.2 }} />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="url(#usersLine)"
                  strokeWidth={2.5}
                  dot={false}
                  activeDot={{ r: 5, fill: "#E8431A" }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <Empty>No signups in the last 30 days.</Empty>
          )}
        </ChartCard>

        <ChartCard
          title="License claims"
          subtitle="last 30 days"
          icon={Activity}
        >
          {licenseClaims.isPending ? (
            <Skeleton className="h-[260px] w-full" />
          ) : licenseClaims.data?.length ? (
            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                data={licenseClaims.data}
                margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="currentColor"
                  opacity={0.07}
                />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 11, fill: "#888" }}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v: string) =>
                    new Date(v).toLocaleDateString("en", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#888" }}
                  tickLine={false}
                  axisLine={false}
                  width={32}
                />
                <Tooltip content={<KwTooltip />} cursor={{ fill: "#E8431A", fillOpacity: 0.05 }} />
                <Bar dataKey="count" fill="#E8431A" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
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
            <Skeleton className="h-[260px] w-full" />
          ) : topProducts.data?.length ? (
            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                data={topProducts.data}
                layout="vertical"
                margin={{ top: 8, right: 16, left: 6, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="currentColor"
                  opacity={0.07}
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tick={{ fontSize: 11, fill: "#888" }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "#888" }}
                  tickLine={false}
                  axisLine={false}
                  width={140}
                  tickFormatter={(v: string) =>
                    v.length > 18 ? v.slice(0, 18) + "…" : v
                  }
                />
                <Tooltip content={<KwTooltip />} cursor={{ fill: "#E8431A", fillOpacity: 0.05 }} />
                <Bar
                  dataKey="claimedLicenses"
                  fill="#E8431A"
                  radius={[0, 6, 6, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
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
            <Skeleton className="h-[260px] w-full" />
          ) : platformDist.data?.length ? (
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[160px_1fr]">
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Tooltip content={<KwTooltip />} />
                  <Pie
                    data={platformDist.data}
                    dataKey="count"
                    nameKey="platform"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    innerRadius={42}
                    strokeWidth={2}
                    stroke="var(--card)"
                  >
                    {platformDist.data.map((_, index) => (
                      <Cell
                        key={index}
                        fill={PIE_COLORS[index % PIE_COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <ul className="space-y-1.5 text-[12px]">
                {platformDist.data.slice(0, 6).map((p, i) => (
                  <li key={p.platform} className="flex items-center gap-2">
                    <span
                      className="size-2 rounded-full"
                      style={{ background: PIE_COLORS[i % PIE_COLORS.length] }}
                    />
                    <span className="flex-1 truncate">{p.platform}</span>
                    <span className="font-mono text-muted-foreground tabular-nums">
                      {p.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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

function KwTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; name: string; dataKey?: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-[#efefef] bg-white px-3 py-2 text-[12px] shadow-[0px_4px_14px_rgba(0,0,0,0.08)] dark:border-[#1f1f1f] dark:bg-[#111111]">
      {label && (
        <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#888]">
          {label}
        </div>
      )}
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="font-mono tabular-nums">{p.value}</span>
          <span className="text-muted-foreground">{p.name ?? p.dataKey}</span>
        </div>
      ))}
    </div>
  );
}
