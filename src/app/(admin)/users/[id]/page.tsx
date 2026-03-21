"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Skeleton } from "~/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
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
import { toast } from "sonner";
import { ArrowLeft, RotateCcw } from "lucide-react";

export default function UserDetailPage() {
  const params = useParams();
  const userId = params.id as string;

  const user = api.users.getById.useQuery({ id: userId });
  const utils = api.useUtils();

  const updateRole = api.users.updateRole.useMutation({
    onSuccess: () => {
      toast.success("Role updated");
      void utils.users.getById.invalidate({ id: userId });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const resetFreeLicenses = api.users.resetFreeLicenses.useMutation({
    onSuccess: () => {
      toast.success("Free licenses reset");
      void utils.users.getById.invalidate({ id: userId });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  if (user.isPending) {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    );
  }

  if (user.error) {
    return (
      <div className="flex items-center justify-center py-12 text-muted-foreground">
        User not found
      </div>
    );
  }

  const data = user.data;
  const newRole = data.role === "FREE_USER" ? "PRO_MEMBER" : "FREE_USER";

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon-sm" render={<Link href="/users" />}>
          <ArrowLeft className="size-4" />
        </Button>
        <h2 className="text-lg font-semibold">User Details</h2>
      </div>

      {/* Profile Card */}
      <Card>
        <CardHeader>
          <CardTitle>{data.name ?? "Unnamed User"}</CardTitle>
          <CardDescription>{data.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Role</p>
              <Badge
                variant={data.role === "PRO_MEMBER" ? "default" : "secondary"}
              >
                {data.role === "PRO_MEMBER" ? "Pro Member" : "Free User"}
              </Badge>
            </div>
            <div>
              <p className="text-muted-foreground">Onboarding</p>
              <Badge
                variant={data.onboardingCompleted ? "outline" : "destructive"}
              >
                {data.onboardingCompleted ? "Completed" : "Pending"}
              </Badge>
            </div>
            <div>
              <p className="text-muted-foreground">Free Licenses Available</p>
              <p className="font-medium">{data.freeLicenseAvailable}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Joined</p>
              <p className="font-medium">
                {new Date(data.createdAt).toLocaleDateString()}
              </p>
            </div>
            {data.sellingPlatforms.length > 0 && (
              <div className="col-span-2">
                <p className="mb-1 text-muted-foreground">Selling Platforms</p>
                <div className="flex flex-wrap gap-1">
                  {data.sellingPlatforms.map((p) => (
                    <Badge key={p} variant="outline">
                      {p}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Separator />

          <div className="flex flex-wrap gap-3">
            <AlertDialog>
              <AlertDialogTrigger
                render={
                  <Button variant="outline" size="sm">
                    Switch to{" "}
                    {newRole === "PRO_MEMBER" ? "Pro Member" : "Free User"}
                  </Button>
                }
              />
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Change user role?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will change {data.name ?? data.email}&apos;s role to{" "}
                    {newRole === "PRO_MEMBER" ? "Pro Member" : "Free User"}.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() =>
                      updateRole.mutate({
                        id: userId,
                        role: newRole,
                      })
                    }
                  >
                    Confirm
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger
                render={
                  <Button variant="outline" size="sm">
                    <RotateCcw className="size-3.5" />
                    Reset Free Licenses
                  </Button>
                }
              />
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Reset free licenses?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will reset the free license availability to 1 for this
                    user.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => resetFreeLicenses.mutate({ id: userId })}
                  >
                    Reset
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>

      {/* Licenses Card */}
      <Card>
        <CardHeader>
          <CardTitle>Licenses ({data.licenses.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {data.licenses.length === 0 ? (
            <p className="py-4 text-center text-sm text-muted-foreground">
              No licenses claimed yet.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Claimed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.licenses.map((license) => (
                  <TableRow key={license.id}>
                    <TableCell className="font-medium">
                      {license.product.name}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          license.licenseType === "EXCLUSIVE"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {license.licenseType}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(license.claimedAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
