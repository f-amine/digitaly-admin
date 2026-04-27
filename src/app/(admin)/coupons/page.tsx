"use client";

import { useEffect, useState } from "react";
import { Pencil, Search, Tag } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Skeleton } from "~/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { KwPageHeader } from "~/components/kw/kw-page-header";
import { useDebounce } from "~/hooks/use-debounce";
import { api, type RouterOutputs } from "~/trpc/react";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

type CouponItem = RouterOutputs["coupons"]["list"][number];

export default function CouponsPage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search.trim(), 300);
  const coupons = api.coupons.list.useQuery({
    limit: 200,
    search: debouncedSearch || undefined,
  });
  const utils = api.useUtils();
  const [editing, setEditing] = useState<CouponItem | null>(null);

  const setActive = api.coupons.setActive.useMutation({
    onSuccess: () => {
      toast.success("Updated");
      void utils.coupons.list.invalidate();
    },
    onError: (e) => toast.error(e.message),
  });

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <KwPageHeader
        eyebrow="Partner program"
        eyebrowIcon={Tag}
        title="Coupon"
        highlight="codes."
        description="Edit per-partner discounts, rotate codes, or disable. Stripe coupons regenerate when code or discount changes."
        actions={
          <div className="flex items-center gap-2">
            {!coupons.isPending && (
              <Badge variant="secondary" className="text-[10px] tabular-nums">
                {coupons.data?.length ?? 0}
              </Badge>
            )}
            <div className="relative min-w-[260px] max-w-xs">
              <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search code, partner, email…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 rounded-full border-[#efefef] bg-white pl-9 text-xs dark:border-[#1f1f1f] dark:bg-[#111111]"
              />
            </div>
          </div>
        }
      />

      {coupons.isPending ? (
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
                <TableHead className="text-[10px] uppercase">Code</TableHead>
                <TableHead className="text-[10px] uppercase">Partner</TableHead>
                <TableHead className="text-[10px] uppercase">Discount</TableHead>
                <TableHead className="text-[10px] uppercase">Redeemed</TableHead>
                <TableHead className="text-[10px] uppercase">Expires</TableHead>
                <TableHead className="text-[10px] uppercase">Created</TableHead>
                <TableHead className="text-right text-[10px] uppercase">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coupons.data?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="h-24 text-center text-xs text-muted-foreground">
                    No coupons yet.
                  </TableCell>
                </TableRow>
              ) : (
                coupons.data?.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-mono text-xs">{c.code}</TableCell>
                    <TableCell className="text-xs">
                      <div className="font-medium">{c.partner.fullName}</div>
                      <div className="text-[10px] text-muted-foreground">{c.partner.slug}</div>
                    </TableCell>
                    <TableCell className="text-xs">
                      {c.discountType === "PERCENT"
                        ? `${c.discountValue}%`
                        : `$${(c.discountValue / 100).toFixed(2)}`}
                    </TableCell>
                    <TableCell className="font-mono text-xs tabular-nums">
                      {c._count.redemptions}
                    </TableCell>
                    <TableCell className="font-mono text-xs tabular-nums text-muted-foreground">
                      {c.expiresAt ? dateFmt.format(new Date(c.expiresAt)) : "—"}
                    </TableCell>
                    <TableCell className="font-mono text-xs tabular-nums text-muted-foreground">
                      {dateFmt.format(new Date(c.createdAt))}
                    </TableCell>
                    <TableCell className="flex items-center justify-end gap-1">
                      <Button
                        size="icon-xs"
                        variant="ghost"
                        onClick={() => setEditing(c)}
                      >
                        <Pencil className="size-3" />
                      </Button>
                      <Button
                        size="xs"
                        variant={c.active ? "outline" : "default"}
                        disabled={setActive.isPending}
                        onClick={() => setActive.mutate({ id: c.id, active: !c.active })}
                      >
                        {c.active ? "Disable" : "Enable"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}

      <EditCouponDialog
        coupon={editing}
        onClose={() => setEditing(null)}
        onSaved={() => {
          setEditing(null);
          void utils.coupons.list.invalidate();
        }}
      />
    </div>
  );
}

function EditCouponDialog({
  coupon,
  onClose,
  onSaved,
}: {
  coupon: CouponItem | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [code, setCode] = useState("");
  const [discountType, setDiscountType] = useState<"PERCENT" | "FIXED">("PERCENT");
  const [discountValue, setDiscountValue] = useState(0);
  const [expires, setExpires] = useState("");

  useEffect(() => {
    if (coupon) {
      setCode(coupon.code);
      setDiscountType(coupon.discountType);
      setDiscountValue(coupon.discountValue);
      setExpires(coupon.expiresAt ? new Date(coupon.expiresAt).toISOString().slice(0, 10) : "");
    }
  }, [coupon]);

  const update = api.coupons.update.useMutation({
    onSuccess: () => {
      toast.success("Coupon updated");
      onSaved();
    },
    onError: (e) => toast.error(e.message),
  });

  if (!coupon) return null;

  return (
    <Dialog open={!!coupon} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit coupon</DialogTitle>
          <DialogDescription>
            Partner: {coupon.partner.fullName} ({coupon.partner.slug})
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          <div>
            <Label className="text-xs">Code</Label>
            <Input
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              className="font-mono"
            />
            <p className="mt-1 text-[11px] text-muted-foreground">
              Uppercase letters, digits, hyphen and underscore only.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">Discount type</Label>
              <Select
                value={discountType}
                onValueChange={(v) => v && setDiscountType(v as "PERCENT" | "FIXED")}
              >
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue>{discountType === "PERCENT" ? "Percent" : "Fixed"}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PERCENT">Percent</SelectItem>
                  <SelectItem value="FIXED">Fixed (cents)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs">
                Value {discountType === "PERCENT" ? "(1-100)" : "(cents)"}
              </Label>
              <Input
                type="number"
                min={1}
                max={discountType === "PERCENT" ? 100 : 100000}
                value={discountValue}
                onChange={(e) => setDiscountValue(Number(e.target.value))}
              />
            </div>
          </div>
          <div>
            <Label className="text-xs">Expires (optional)</Label>
            <Input
              type="date"
              value={expires}
              onChange={(e) => setExpires(e.target.value)}
            />
          </div>
          {coupon._count.redemptions > 0 && (
            <p className="rounded border-l-2 border-l-amber-500 bg-amber-500/10 px-2 py-1.5 text-[11px] text-amber-700 dark:text-amber-300">
              This coupon has {coupon._count.redemptions} past redemption(s). Editing
              affects only future checkouts.
            </p>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            disabled={update.isPending}
            onClick={() =>
              update.mutate({
                id: coupon.id,
                code,
                discountType,
                discountValue,
                expiresAt: expires ? new Date(expires) : null,
              })
            }
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
