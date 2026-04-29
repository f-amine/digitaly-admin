"use client";

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

const PIE_COLORS = [
  "#E8431A",
  "#FF8C5A",
  "#22c55e",
  "#3b82f6",
  "#a855f7",
  "#f59e0b",
  "#888888",
];

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

const dateTickFormatter = (v: string) =>
  new Date(v).toLocaleDateString("en", { month: "short", day: "numeric" });

const truncateName = (v: string) => (v.length > 18 ? v.slice(0, 18) + "…" : v);

export function UserGrowthChart({ data }: { data: { date: string; count: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="usersLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E8431A" />
            <stop offset="100%" stopColor="#FF8C5A" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.07} />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 11, fill: "#888" }}
          tickLine={false}
          axisLine={false}
          tickFormatter={dateTickFormatter}
        />
        <YAxis tick={{ fontSize: 11, fill: "#888" }} tickLine={false} axisLine={false} width={32} />
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
  );
}

export function LicenseClaimsChart({ data }: { data: { date: string; count: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.07} />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 11, fill: "#888" }}
          tickLine={false}
          axisLine={false}
          tickFormatter={dateTickFormatter}
        />
        <YAxis tick={{ fontSize: 11, fill: "#888" }} tickLine={false} axisLine={false} width={32} />
        <Tooltip content={<KwTooltip />} cursor={{ fill: "#E8431A", fillOpacity: 0.05 }} />
        <Bar dataKey="count" fill="#E8431A" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function TopProductsChart({ data }: { data: { name: string; claimedLicenses: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} layout="vertical" margin={{ top: 8, right: 16, left: 6, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.07} horizontal={false} />
        <XAxis type="number" tick={{ fontSize: 11, fill: "#888" }} tickLine={false} axisLine={false} />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fontSize: 11, fill: "#888" }}
          tickLine={false}
          axisLine={false}
          width={140}
          tickFormatter={truncateName}
        />
        <Tooltip content={<KwTooltip />} cursor={{ fill: "#E8431A", fillOpacity: 0.05 }} />
        <Bar dataKey="claimedLicenses" fill="#E8431A" radius={[0, 6, 6, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function PlatformPieChart({ data }: { data: { platform: string; count: number }[] }) {
  return (
    <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[160px_1fr]">
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Tooltip content={<KwTooltip />} />
          <Pie
            data={data}
            dataKey="count"
            nameKey="platform"
            cx="50%"
            cy="50%"
            outerRadius={70}
            innerRadius={42}
            strokeWidth={2}
            stroke="var(--card)"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ul className="space-y-1.5 text-[12px]">
        {data.slice(0, 6).map((p, i) => (
          <li key={p.platform} className="flex items-center gap-2">
            <span
              className="size-2 rounded-full"
              style={{ background: PIE_COLORS[i % PIE_COLORS.length] }}
            />
            <span className="flex-1 truncate">{p.platform}</span>
            <span className="font-mono text-muted-foreground tabular-nums">{p.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
