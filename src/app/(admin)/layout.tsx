"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { authClient } from "~/server/better-auth/client";
import {
  LayoutDashboard,
  Package,
  Users,
  ShieldCheck,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { Skeleton } from "~/components/ui/skeleton";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/products", label: "Products", icon: Package },
  { href: "/users", label: "Users", icon: Users },
  { href: "/licenses", label: "Licenses", icon: ShieldCheck },
];

function getPageTitle(pathname: string): string {
  if (pathname === "/dashboard") return "Dashboard";
  if (pathname.startsWith("/products/new")) return "New Product";
  if (pathname.startsWith("/products/") && pathname !== "/products")
    return "Edit Product";
  if (pathname === "/products") return "Products";
  if (pathname.startsWith("/users/") && pathname !== "/users")
    return "User Details";
  if (pathname === "/users") return "Users";
  if (pathname === "/licenses") return "Licenses";
  return "Admin";
}

function getBreadcrumbs(pathname: string): string[] {
  const segments = pathname.split("/").filter(Boolean);
  return segments.map((s) => s.charAt(0).toUpperCase() + s.slice(1));
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="grid gap-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const pageTitle = getPageTitle(pathname);
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 flex w-[220px] flex-col border-r border-border/50 bg-card">
        {/* Logo area */}
        <div className="flex h-14 items-center gap-2.5 px-5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-black">
            D
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-semibold tracking-wide text-foreground">
              Digitaly
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
              Admin
            </span>
          </div>
        </div>

        <Separator className="opacity-50" />

        {/* Navigation */}
        <nav className="flex-1 space-y-0.5 px-3 py-4">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-center gap-2.5 rounded-md px-3 py-2 transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                {/* Active left border accent */}
                {isActive && (
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] rounded-full bg-primary" />
                )}
                <item.icon className={cn("size-4 shrink-0", isActive && "text-primary")} />
                <span className="font-mono text-xs uppercase tracking-wider">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <Separator className="opacity-50" />

        {/* User section */}
        <div className="flex items-center gap-2 p-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-semibold text-muted-foreground">
            {session.user?.name?.[0]?.toUpperCase() ?? "A"}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-xs font-medium text-foreground">
              {session.user?.name ?? "Admin"}
            </div>
            <div className="truncate font-mono text-[10px] text-muted-foreground">
              {session.user?.email}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-7 shrink-0 text-muted-foreground hover:text-foreground"
            onClick={async () => {
              await authClient.signOut();
              router.push("/login");
            }}
          >
            <LogOut className="size-3.5" />
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 pl-[220px]">
        {/* Header */}
        <header className="sticky top-0 z-20 flex h-12 items-center justify-between border-b border-border/50 bg-background/80 px-6 backdrop-blur-md">
          <h1 className="text-sm font-medium text-foreground">
            {pageTitle}
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-3 text-muted-foreground/40" />}
                <span className={cn(i === breadcrumbs.length - 1 ? "text-foreground" : "")}>
                  {crumb}
                </span>
              </span>
            ))}
          </div>

          {/* Bottom gradient border */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
        </header>

        <main className="px-6 py-5">{children}</main>
      </div>
    </div>
  );
}
