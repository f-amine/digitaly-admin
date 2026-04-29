"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronRight,
  ChevronsUpDown,
  ClipboardList,
  Handshake,
  LayoutDashboard,
  Loader2,
  LogOut,
  Package,
  ShieldCheck,
  Tag,
  Users,
  Wallet,
} from "lucide-react";

import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Separator } from "~/components/ui/separator";
import { Skeleton } from "~/components/ui/skeleton";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { KwLogo } from "~/components/kw/kw-logo";
import { KwThemeToggle } from "~/components/kw/kw-theme-toggle";
import { authClient } from "~/server/better-auth/client";

type NavItem = { title: string; href: string; icon: React.ElementType };

const inventoryNav: NavItem[] = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "Products", href: "/products", icon: Package },
  { title: "Users", href: "/users", icon: Users },
  { title: "Licenses", href: "/licenses", icon: ShieldCheck },
];

const partnersNav: NavItem[] = [
  { title: "Applications", href: "/applications", icon: ClipboardList },
  { title: "Partners", href: "/partners", icon: Handshake },
  { title: "Coupons", href: "/coupons", icon: Tag },
  { title: "Payouts", href: "/payouts", icon: Wallet },
];

function NavGroup({
  label,
  items,
  pathname,
}: {
  label: string;
  items: NavItem[];
  pathname: string;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  isActive={isActive}
                  tooltip={item.title}
                  render={<Link href={item.href} />}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

function getPageTitle(pathname: string): string {
  if (pathname === "/dashboard") return "Overview";
  if (pathname.startsWith("/products/new")) return "New product";
  if (pathname.startsWith("/products/")) return "Edit product";
  if (pathname === "/products") return "Products";
  if (pathname.startsWith("/users/")) return "User";
  if (pathname === "/users") return "Users";
  if (pathname === "/licenses") return "Licenses";
  if (pathname === "/applications") return "Applications";
  if (pathname === "/partners") return "Partners";
  if (pathname === "/coupons") return "Coupons";
  if (pathname === "/payouts") return "Payouts";
  return "Admin";
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    if (!isPending && !session) router.push("/login");
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Skeleton className="h-8 w-48" />
      </div>
    );
  }
  if (!session) return null;

  const user = session.user;
  const userInitial = user?.name
    ? user.name.charAt(0).toUpperCase()
    : user?.email
      ? user.email.charAt(0).toUpperCase()
      : "A";

  const segments = pathname.split("/").filter(Boolean);
  const pageTitle = getPageTitle(pathname);

  async function handleSignOut() {
    if (signingOut) return;
    setSigningOut(true);
    try {
      await authClient.signOut();
      router.push("/login");
      router.refresh();
    } finally {
      setSigningOut(false);
    }
  }

  return (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" render={<Link href="/dashboard" />}>
                <div className="flex items-center gap-2">
                  <KwLogo className="h-6 w-auto" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#888]">
                    Admin
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <NavGroup label="Inventory" items={inventoryNav} pathname={pathname} />
          <NavGroup label="Partner program" items={partnersNav} pathname={pathname} />
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="flex items-center gap-1 px-1">
                <div className="text-muted-foreground flex-1 truncate px-2 text-[11px]">
                  {user?.email}
                </div>
                <KwThemeToggle />
              </div>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    />
                  }
                >
                  <Avatar size="sm">
                    <AvatarFallback className="bg-[#fff4f1] text-[11px] font-semibold text-[#E8431A] dark:bg-[#E8431A]/20">
                      {userInitial}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-start text-sm leading-tight">
                    <span className="truncate font-medium">
                      {user?.name ?? "Admin"}
                    </span>
                    <span className="text-muted-foreground truncate text-xs">
                      {user?.email}
                    </span>
                  </div>
                  <ChevronsUpDown className="ms-auto size-4 text-muted-foreground" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  align="start"
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56"
                >
                  <DropdownMenuLabel className="text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                    Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    disabled={signingOut}
                    className="text-destructive focus:text-destructive"
                  >
                    {signingOut ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <LogOut className="size-4" />
                    )}
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="bg-background/80 sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b border-[#efefef] px-4 backdrop-blur-md dark:border-[#1f1f1f]">
          <SidebarTrigger className="-ms-1" />
          <Separator orientation="vertical" className="me-2 h-4" />
          <nav className="text-muted-foreground flex items-center gap-1 text-sm">
            <Link
              href="/dashboard"
              className="hover:text-foreground transition-colors"
            >
              Admin
            </Link>
            {segments.length > 0 && (
              <>
                <ChevronRight className="size-3.5" />
                <span className="text-foreground font-medium">{pageTitle}</span>
              </>
            )}
          </nav>
        </header>
        <div className="flex-1 overflow-auto px-6 py-6 md:px-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
