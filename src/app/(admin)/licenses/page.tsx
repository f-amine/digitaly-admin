"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { toast } from "sonner";
import { XCircle } from "lucide-react";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export default function LicensesPage() {
  const [licenseType, setLicenseType] = useState<
    "" | "SHARED" | "EXCLUSIVE"
  >("");

  const licenses = api.licenses.list.useQuery({
    licenseType: licenseType || undefined,
    limit: 50,
  });

  const utils = api.useUtils();

  const revokeLicense = api.licenses.revoke.useMutation({
    onSuccess: () => {
      toast.success("License revoked");
      void utils.licenses.list.invalidate();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const count = licenses.data?.items.length ?? 0;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-medium">Licenses</h1>
          {!licenses.isPending && (
            <Badge variant="secondary" className="font-mono text-[10px] tabular-nums">
              {count}
            </Badge>
          )}
        </div>
        <div className="flex-1" />
        <Select value={licenseType} onValueChange={(v) => setLicenseType(v ?? "")}>
          <SelectTrigger className="h-8 w-[140px] text-xs">
            <SelectValue placeholder="All Types">
              {licenseType === "SHARED" ? "Shared" : licenseType === "EXCLUSIVE" ? "Exclusive" : "All Types"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Types</SelectItem>
            <SelectItem value="SHARED">Shared</SelectItem>
            <SelectItem value="EXCLUSIVE">Exclusive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      {licenses.isPending ? (
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
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Product</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Type</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Claimed</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {licenses.data?.items.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="h-24 text-center text-xs text-muted-foreground"
                  >
                    No licenses found.
                  </TableCell>
                </TableRow>
              ) : (
                licenses.data?.items.map((license) => (
                  <TableRow key={license.id} className="hover:bg-muted/30">
                    <TableCell className="text-xs">
                      <div>
                        <p className="font-medium">
                          {license.user.name ?? "---"}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {license.user.email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs font-medium">
                      {license.product.name}
                    </TableCell>
                    <TableCell className="text-xs">
                      <Badge
                        variant={
                          license.licenseType === "EXCLUSIVE"
                            ? "default"
                            : "secondary"
                        }
                        className={`text-[10px] ${license.licenseType === "EXCLUSIVE" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      >
                        {license.licenseType}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-mono text-xs tabular-nums text-muted-foreground">
                      {dateFmt.format(new Date(license.claimedAt))}
                    </TableCell>
                    <TableCell className="text-xs">
                      <AlertDialog>
                        <AlertDialogTrigger
                          render={
                            <Button variant="ghost" size="icon-xs" className="text-destructive hover:text-destructive">
                              <XCircle className="size-3.5" />
                            </Button>
                          }
                        />
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Revoke license?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This will revoke the license for &quot;
                              {license.product.name}&quot; from{" "}
                              {license.user.name ?? license.user.email}. The
                              product&apos;s claimed count will be decremented.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              variant="destructive"
                              onClick={() =>
                                revokeLicense.mutate({ id: license.id })
                              }
                            >
                              Revoke
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
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
