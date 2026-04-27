"use client";

import { useMemo, useState } from "react";
import { Check, ClipboardList, X } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { KwPageHeader } from "~/components/kw/kw-page-header";
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
import { Textarea } from "~/components/ui/textarea";
import { api, type RouterOutputs } from "~/trpc/react";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

type Status = "" | "PENDING" | "APPROVED" | "REJECTED";

export default function ApplicationsPage() {
  const [status, setStatus] = useState<Status>("PENDING");
  const [openId, setOpenId] = useState<string | null>(null);

  const apps = api.applications.list.useQuery({
    status: status || undefined,
    limit: 100,
  });

  const selected = useMemo(
    () => apps.data?.find((a) => a.id === openId) ?? null,
    [apps.data, openId],
  );

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <KwPageHeader
        eyebrow="Partner program"
        eyebrowIcon={ClipboardList}
        title="Applications"
        highlight="inbox."
        description="Review submitted partner applications. Approving auto-mints a coupon and emails the applicant."
        actions={
          <div className="flex items-center gap-2">
            {!apps.isPending && (
              <Badge variant="secondary" className="text-[10px] tabular-nums">
                {apps.data?.length ?? 0}
              </Badge>
            )}
            <Select
              value={status}
              onValueChange={(v) => setStatus((v as Status) ?? "")}
            >
              <SelectTrigger className="h-9 w-[160px] rounded-full text-xs">
                <SelectValue placeholder="All statuses">
                  {status === "PENDING"
                    ? "Pending"
                    : status === "APPROVED"
                      ? "Approved"
                      : status === "REJECTED"
                        ? "Rejected"
                        : "All statuses"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All statuses</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="APPROVED">Approved</SelectItem>
                <SelectItem value="REJECTED">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        }
      />

      {apps.isPending ? (
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
                <TableHead className="text-[10px] uppercase">Applicant</TableHead>
                <TableHead className="text-[10px] uppercase">Niche</TableHead>
                <TableHead className="text-[10px] uppercase">Audience</TableHead>
                <TableHead className="text-[10px] uppercase">Status</TableHead>
                <TableHead className="text-[10px] uppercase">Submitted</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {apps.data?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center text-xs text-muted-foreground">
                    No applications.
                  </TableCell>
                </TableRow>
              ) : (
                apps.data?.map((a) => (
                  <TableRow key={a.id} className="hover:bg-muted/30 cursor-pointer" onClick={() => setOpenId(a.id)}>
                    <TableCell className="text-xs">
                      <div className="font-medium">{a.fullName}</div>
                      <div className="text-[10px] text-muted-foreground">{a.email}</div>
                    </TableCell>
                    <TableCell className="text-xs">{a.niche}</TableCell>
                    <TableCell className="font-mono text-xs tabular-nums">
                      {a.audienceSize.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={a.status} />
                    </TableCell>
                    <TableCell className="font-mono text-xs tabular-nums text-muted-foreground">
                      {dateFmt.format(new Date(a.createdAt))}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="xs" onClick={(e) => { e.stopPropagation(); setOpenId(a.id); }}>
                        Review
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      )}

      <ReviewDialog
        application={selected}
        onClose={() => setOpenId(null)}
        onMutated={() => {
          setOpenId(null);
          void apps.refetch();
        }}
      />
    </div>
  );
}

function StatusBadge({ status }: { status: "PENDING" | "APPROVED" | "REJECTED" }) {
  if (status === "APPROVED")
    return <Badge className="bg-green-600 text-white text-[10px]">Approved</Badge>;
  if (status === "REJECTED")
    return <Badge variant="destructive" className="text-[10px]">Rejected</Badge>;
  return <Badge variant="secondary" className="text-[10px]">Pending</Badge>;
}

type AppItem = RouterOutputs["applications"]["list"][number];

function ReviewDialog({
  application,
  onClose,
  onMutated,
}: {
  application: AppItem | null;
  onClose: () => void;
  onMutated: () => void;
}) {
  const [discountValue, setDiscountValue] = useState(15);
  const [discountType, setDiscountType] = useState<"PERCENT" | "FIXED">("PERCENT");
  const [rejectNotes, setRejectNotes] = useState("");
  const [slugOverride, setSlugOverride] = useState("");

  const approve = api.applications.approve.useMutation({
    onSuccess: () => {
      toast.success("Application approved + coupon generated");
      onMutated();
    },
    onError: (e) => toast.error(e.message),
  });
  const reject = api.applications.reject.useMutation({
    onSuccess: () => {
      toast.success("Application rejected");
      onMutated();
    },
    onError: (e) => toast.error(e.message),
  });

  if (!application) return null;
  const isPending = application.status === "PENDING";

  return (
    <Dialog open={!!application} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Review application</DialogTitle>
          <DialogDescription>{application.fullName} — {application.email}</DialogDescription>
        </DialogHeader>

        <div className="space-y-3 text-sm">
          <Row label="Niche" value={application.niche} />
          <Row label="Audience size" value={application.audienceSize.toLocaleString()} />
          <Row label="Social handle" value={application.socialHandle} />
          <Row label="Pitch" value={application.pitch} multiline />
          {application.socialLinks && typeof application.socialLinks === "object" && (
            <div>
              <div className="text-[10px] uppercase text-muted-foreground">Social links</div>
              <ul className="mt-1 space-y-0.5 text-xs">
                {Object.entries(application.socialLinks as Record<string, string>)
                  .filter(([, v]) => v)
                  .map(([k, v]) => (
                    <li key={k}>
                      <span className="text-muted-foreground">{k}: </span>
                      <a href={v} target="_blank" className="underline">{v}</a>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {application.partner && (
            <div className="rounded-md border p-3 text-xs">
              <div className="font-medium">Partner record</div>
              <div className="text-muted-foreground">slug: {application.partner.slug}</div>
            </div>
          )}
        </div>

        {isPending && (
          <div className="space-y-3 border-t pt-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">Discount type</Label>
                <Select
                  value={discountType}
                  onValueChange={(v) => setDiscountType((v as "PERCENT" | "FIXED") ?? "PERCENT")}
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
                <Label className="text-xs">Value</Label>
                <Input
                  type="number"
                  className="h-8 text-xs"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(Number(e.target.value))}
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Slug override (optional)</Label>
              <Input
                placeholder="auto-generated if blank"
                className="h-8 text-xs"
                value={slugOverride}
                onChange={(e) => setSlugOverride(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-xs">Rejection notes (optional)</Label>
              <Textarea
                rows={2}
                value={rejectNotes}
                onChange={(e) => setRejectNotes(e.target.value)}
              />
            </div>
          </div>
        )}

        <DialogFooter className="gap-2">
          {isPending ? (
            <>
              <Button
                variant="destructive"
                disabled={reject.isPending}
                onClick={() =>
                  reject.mutate({ id: application.id, notes: rejectNotes || undefined })
                }
              >
                <X className="mr-1 size-4" /> Reject
              </Button>
              <Button
                disabled={approve.isPending}
                onClick={() =>
                  approve.mutate({
                    id: application.id,
                    discountType,
                    discountValue,
                    slug: slugOverride || undefined,
                  })
                }
              >
                <Check className="mr-1 size-4" /> Approve + generate coupon
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={onClose}>Close</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Row({ label, value, multiline }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div>
      <div className="text-[10px] uppercase text-muted-foreground">{label}</div>
      <div className={`mt-0.5 ${multiline ? "whitespace-pre-wrap" : ""}`}>{value}</div>
    </div>
  );
}
