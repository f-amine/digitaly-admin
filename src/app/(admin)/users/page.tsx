"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Skeleton } from "~/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Search, ArrowRight, Check, Minus, Users } from "lucide-react";

import { KwPageHeader } from "~/components/kw/kw-page-header";
import { useDebounce } from "~/hooks/use-debounce";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState<"" | "FREE_USER" | "PRO_MEMBER">("");
  const debouncedSearch = useDebounce(search.trim(), 300);

  const users = api.users.list.useQuery({
    search: debouncedSearch || undefined,
    role: role || undefined,
    limit: 50,
  });

  const count = users.data?.items.length ?? 0;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <KwPageHeader
        eyebrow="Inventory"
        eyebrowIcon={Users}
        title="All"
        highlight="users."
        description="Search the user base, adjust roles, and reset free-license quotas."
        actions={
          <div className="flex items-center gap-2">
            {!users.isPending && (
              <Badge variant="secondary" className="font-mono text-[10px] tabular-nums">
                {count}
              </Badge>
            )}
            <div className="relative min-w-[220px] max-w-xs">
              <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search name or email…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 rounded-full border-[#efefef] bg-white pl-9 text-xs dark:border-[#1f1f1f] dark:bg-[#111111]"
              />
            </div>
            <Select value={role} onValueChange={(v) => setRole(v ?? "")}>
              <SelectTrigger className="h-9 w-[140px] rounded-full text-xs">
                <SelectValue placeholder="All Roles">
                  {role === "FREE_USER"
                    ? "Free User"
                    : role === "PRO_MEMBER"
                      ? "Pro Member"
                      : "All Roles"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Roles</SelectItem>
                <SelectItem value="FREE_USER">Free User</SelectItem>
                <SelectItem value="PRO_MEMBER">Pro Member</SelectItem>
              </SelectContent>
            </Select>
          </div>
        }
      />

      {/* Table */}
      {users.isPending ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-[#efefef] bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.04)] dark:border-[#1f1f1f] dark:bg-[#111111]">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">User</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Role</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Onboarding</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Licenses</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Joined</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.data?.items.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="h-24 text-center text-xs text-muted-foreground"
                  >
                    No users found.
                  </TableCell>
                </TableRow>
              ) : (
                users.data?.items.map((user) => (
                  <TableRow key={user.id} className="hover:bg-muted/30">
                    <TableCell className="text-xs">
                      <div>
                        <p className="font-medium">{user.name ?? "---"}</p>
                        <p className="text-[10px] text-muted-foreground">{user.email}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs">
                      <Badge
                        variant={user.role === "PRO_MEMBER" ? "default" : "secondary"}
                        className={`text-[10px] ${user.role === "PRO_MEMBER" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        {user.role === "PRO_MEMBER" ? "Pro" : "Free"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs">
                      {user.onboardingCompleted ? (
                        <Check className="size-3.5 text-green-500" />
                      ) : (
                        <Minus className="size-3.5 text-muted-foreground" />
                      )}
                    </TableCell>
                    <TableCell className="font-mono text-xs tabular-nums">
                      {user._count.licenses}
                    </TableCell>
                    <TableCell className="font-mono text-xs tabular-nums text-muted-foreground">
                      {dateFmt.format(new Date(user.createdAt))}
                    </TableCell>
                    <TableCell className="text-xs">
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        render={<Link href={`/users/${user.id}`} />}
                      >
                        <ArrowRight className="size-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
