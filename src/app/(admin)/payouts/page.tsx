"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Wallet, X } from "lucide-react";
import { toast } from "sonner";

import { KwPageHeader } from "~/components/kw/kw-page-header";

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
import { Skeleton } from "~/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Textarea } from "~/components/ui/textarea";
import { api, type RouterOutputs } from "~/trpc/react";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const formatCents = (c: number, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    c / 100,
  );

type PayoutItem = RouterOutputs["payouts"]["list"][number];

export default function PayoutsPage() {
  const payouts = api.payouts.list.useQuery({ limit: 200 });
  const utils = api.useUtils();
  const [actioning, setActioning] = useState<PayoutItem | null>(null);

  const pending = useMemo(
    () => (payouts.data ?? []).filter((p) => p.status === "PENDING"),
    [payouts.data],
  );
  const history = useMemo(
    () => (payouts.data ?? []).filter((p) => p.status !== "PENDING"),
    [payouts.data],
  );

  const refresh = () => void utils.payouts.list.invalidate();

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <KwPageHeader
        eyebrow="Partner program"
        eyebrowIcon={Wallet}
        title="Payout"
        highlight="queue."
        description="Process bank-transfer requests submitted by partners. Each row links to their bank details, ready to copy."
        actions={
          !payouts.isPending && (
            <Badge variant="secondary" className="text-[10px] tabular-nums">
              {pending.length} pending · {history.length} done
            </Badge>
          )
        }
      />

      {payouts.isPending ? (
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      ) : (
        <>
          <Section
            title="Pending requests"
            empty="No pending payout requests."
            rows={pending}
            onAction={setActioning}
            highlight
          />
          <Section
            title="History"
            empty="No completed payouts yet."
            rows={history}
            onAction={setActioning}
          />
        </>
      )}

      <ResolveDialog
        payout={actioning}
        onClose={() => setActioning(null)}
        onResolved={() => {
          setActioning(null);
          refresh();
        }}
      />
    </div>
  );
}

function Section({
  title,
  empty,
  rows,
  highlight,
  onAction,
}: {
  title: string;
  empty: string;
  rows: PayoutItem[];
  highlight?: boolean;
  onAction: (p: PayoutItem) => void;
}) {
  return (
    <section>
      <h2 className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
        {title}
      </h2>
      <div
        className={`overflow-hidden rounded-2xl border bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.04)] dark:bg-[#111111] ${highlight && rows.length > 0 ? "border-[#E8431A]/30 bg-[#fff4f1]/40 dark:border-[#E8431A]/40 dark:bg-[#E8431A]/5" : "border-[#efefef] dark:border-[#1f1f1f]"}`}
      >
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-[10px] uppercase">Partner</TableHead>
              <TableHead className="text-[10px] uppercase">Amount</TableHead>
              <TableHead className="text-[10px] uppercase">Bank</TableHead>
              <TableHead className="text-[10px] uppercase">Status</TableHead>
              <TableHead className="text-[10px] uppercase">Reference</TableHead>
              <TableHead className="text-[10px] uppercase">Date</TableHead>
              <TableHead className="text-right text-[10px] uppercase">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="h-20 text-center text-xs text-muted-foreground"
                >
                  {empty}
                </TableCell>
              </TableRow>
            ) : (
              rows.map((p) => {
                const bank = (p.partner.payoutDetails ?? null) as Record<
                  string,
                  string
                > | null;
                return (
                  <TableRow key={p.id}>
                    <TableCell className="text-xs">
                      <div className="font-medium">{p.partner.fullName}</div>
                      <div className="text-[10px] text-muted-foreground">
                        {p.partner.email}
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-xs tabular-nums">
                      {formatCents(p.amountCents, p.currency)}
                    </TableCell>
                    <TableCell className="font-mono text-[11px]">
                      {bank?.iban ? (
                        <span className="truncate">{bank.iban}</span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          p.status === "PAID"
                            ? "default"
                            : p.status === "FAILED"
                              ? "destructive"
                              : "secondary"
                        }
                        className={`text-[10px] ${p.status === "PAID" ? "bg-green-600" : ""}`}
                      >
                        {p.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-[11px]">
                      {p.reference ?? "—"}
                    </TableCell>
                    <TableCell className="font-mono text-[11px] tabular-nums text-muted-foreground">
                      {dateFmt.format(new Date(p.paidAt ?? p.createdAt))}
                    </TableCell>
                    <TableCell className="text-right">
                      {p.status === "PENDING" ? (
                        <Button size="xs" onClick={() => onAction(p)}>
                          Process
                        </Button>
                      ) : null}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

function ResolveDialog({
  payout,
  onClose,
  onResolved,
}: {
  payout: PayoutItem | null;
  onClose: () => void;
  onResolved: () => void;
}) {
  const [reference, setReference] = useState("");
  const [failNotes, setFailNotes] = useState("");

  const markPaid = api.payouts.markPaid.useMutation({
    onSuccess: () => {
      toast.success("Marked paid");
      setReference("");
      onResolved();
    },
    onError: (e) => toast.error(e.message),
  });
  const markFailed = api.payouts.markFailed.useMutation({
    onSuccess: () => {
      toast.success("Marked failed");
      setFailNotes("");
      onResolved();
    },
    onError: (e) => toast.error(e.message),
  });

  if (!payout) return null;
  const bank = (payout.partner.payoutDetails ?? null) as Record<
    string,
    string
  > | null;

  return (
    <Dialog open={!!payout} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Process payout request</DialogTitle>
          <DialogDescription>
            {payout.partner.fullName} ({payout.partner.email}) requested{" "}
            {formatCents(payout.amountCents, payout.currency)}.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          {bank?.iban || bank?.accountHolder ? (
            <div className="rounded-md border bg-muted/40 p-3 font-mono text-[11px] leading-relaxed">
              <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                Bank details
              </div>
              {bank.accountHolder && (
                <BankRow label="Holder" value={bank.accountHolder} />
              )}
              {bank.iban && <BankRow label="IBAN" value={bank.iban} mono />}
              {bank.bankName && <BankRow label="Bank" value={bank.bankName} />}
              {bank.swift && <BankRow label="SWIFT" value={bank.swift} mono />}
            </div>
          ) : (
            <div className="rounded-md border border-amber-500/40 bg-amber-500/10 p-2.5 text-[11px] text-amber-700 dark:text-amber-300">
              ⚠ Partner has no bank details on file. Reach out before paying.
            </div>
          )}

          {payout.notes && (
            <div className="rounded-md border bg-background p-2.5 text-[12px]">
              <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
                Partner note
              </span>
              <p className="mt-1 whitespace-pre-wrap">{payout.notes}</p>
            </div>
          )}

          <div className="space-y-3 border-t pt-3">
            <div>
              <Label className="text-xs">Bank transaction reference (paid)</Label>
              <Input
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="e.g. SEPA tx id"
                className="font-mono"
              />
            </div>
            <Button
              size="sm"
              className="w-full bg-green-600 hover:bg-green-700"
              disabled={markPaid.isPending}
              onClick={() =>
                markPaid.mutate({
                  id: payout.id,
                  reference: reference || undefined,
                })
              }
            >
              <Check className="me-1 size-3.5" /> Mark paid
            </Button>
          </div>

          <div className="space-y-2 border-t pt-3">
            <Label className="text-xs">Mark failed (optional reason)</Label>
            <Textarea
              rows={2}
              value={failNotes}
              onChange={(e) => setFailNotes(e.target.value)}
              placeholder="e.g. invalid IBAN — partner notified"
            />
            <Button
              size="sm"
              variant="destructive"
              className="w-full"
              disabled={markFailed.isPending}
              onClick={() =>
                markFailed.mutate({
                  id: payout.id,
                  notes: failNotes || undefined,
                })
              }
            >
              <X className="me-1 size-3.5" /> Mark failed
            </Button>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function BankRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  function copy() {
    void navigator.clipboard.writeText(value);
    toast.success(`${label} copied`);
  }
  return (
    <div className="flex items-center justify-between gap-2">
      <div>
        <span className="text-muted-foreground">{label}: </span>
        <span className={mono ? "font-mono" : ""}>{value}</span>
      </div>
      <button
        onClick={copy}
        className="text-muted-foreground hover:text-foreground"
        aria-label={`Copy ${label}`}
      >
        <Copy className="size-3" />
      </button>
    </div>
  );
}
