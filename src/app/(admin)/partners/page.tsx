"use client";

import { useState } from "react";
import { Handshake, Search } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Skeleton } from "~/components/ui/skeleton";
import { KwPageHeader } from "~/components/kw/kw-page-header";
import { useDebounce } from "~/hooks/use-debounce";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { api } from "~/trpc/react";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default function PartnersPage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search.trim(), 300);
  const partners = api.partners.list.useQuery({
    search: debouncedSearch || undefined,
    limit: 100,
  });
  const utils = api.useUtils();

  const setActive = api.partners.setActive.useMutation({
    onSuccess: () => {
      toast.success("Updated");
      void utils.partners.list.invalidate();
    },
    onError: (e) => toast.error(e.message),
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <KwPageHeader
        eyebrow="Partner program"
        eyebrowIcon={Handshake}
        title="Active"
        highlight="partners."
        description="Approved creators who can drive sign-ups via their coupon and referral link."
        actions={
          <div className="flex items-center gap-2">
            {!partners.isPending && (
              <Badge variant="secondary" className="text-[10px] tabular-nums">
                {partners.data?.length ?? 0}
              </Badge>
            )}
            <div className="relative min-w-[220px] max-w-xs">
              <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search name, email, slug…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 rounded-full border-[#efefef] bg-white pl-9 text-xs dark:border-[#1f1f1f] dark:bg-[#111111]"
              />
            </div>
          </div>
        }
      />

      {partners.isPending ? (
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-[#efefef] bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.04)] dark:border-[#1f1f1f] dark:bg-[#111111]">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-[10px] uppercase">Partner</TableHead>
                <TableHead className="text-[10px] uppercase">Slug</TableHead>
                <TableHead className="text-[10px] uppercase">Coupon</TableHead>
                <TableHead className="text-[10px] uppercase">Niche</TableHead>
                <TableHead className="text-[10px] uppercase">Clicks</TableHead>
                <TableHead className="text-[10px] uppercase">Joined</TableHead>
                <TableHead className="text-[10px] uppercase">Active</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partners.data?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center text-xs text-muted-foreground">
                    No partners yet.
                  </TableCell>
                </TableRow>
              ) : (
                partners.data?.map((p) => (
                  <TableRow key={p.id} className="hover:bg-muted/30">
                    <TableCell className="text-xs">
                      <div className="font-medium">{p.fullName}</div>
                      <div className="text-[10px] text-muted-foreground">{p.email}</div>
                    </TableCell>
                    <TableCell className="font-mono text-xs">{p.slug}</TableCell>
                    <TableCell className="font-mono text-xs">
                      {p.coupons[0]?.code ?? "—"}
                    </TableCell>
                    <TableCell className="text-xs">{p.niche}</TableCell>
                    <TableCell className="font-mono text-xs tabular-nums">
                      {p._count.clicks}
                    </TableCell>
                    <TableCell className="font-mono text-xs tabular-nums text-muted-foreground">
                      {dateFmt.format(new Date(p.createdAt))}
                    </TableCell>
                    <TableCell>
                      <Button
                        size="xs"
                        variant={p.active ? "outline" : "default"}
                        disabled={setActive.isPending}
                        onClick={() => setActive.mutate({ id: p.id, active: !p.active })}
                      >
                        {p.active ? "Deactivate" : "Activate"}
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
