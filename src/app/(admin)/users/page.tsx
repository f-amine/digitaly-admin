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
import { Search, ArrowRight, Check, Minus } from "lucide-react";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState<"" | "FREE_USER" | "PRO_MEMBER">("");

  const users = api.users.list.useQuery({
    search: search || undefined,
    role: role || undefined,
    limit: 50,
  });

  const count = users.data?.items.length ?? 0;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-medium">Users</h1>
          {!users.isPending && (
            <Badge variant="secondary" className="font-mono text-[10px] tabular-nums">
              {count}
            </Badge>
          )}
        </div>
        <div className="flex-1" />
        <div className="relative min-w-[200px] max-w-xs">
          <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-8 pl-8 text-xs"
          />
        </div>
        <Select value={role} onValueChange={(v) => setRole((v ?? "") as "" | "FREE_USER" | "PRO_MEMBER")}>
          <SelectTrigger className="h-8 w-[140px] text-xs">
            <SelectValue placeholder="All Roles">
              {role === "FREE_USER" ? "Free User" : role === "PRO_MEMBER" ? "Pro Member" : "All Roles"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Roles</SelectItem>
            <SelectItem value="FREE_USER">Free User</SelectItem>
            <SelectItem value="PRO_MEMBER">Pro Member</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      {users.isPending ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border">
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
