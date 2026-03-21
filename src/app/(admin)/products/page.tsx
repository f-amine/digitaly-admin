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
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { toast } from "sonner";

const CATEGORIES = [
  { value: "", label: "All Categories" },
  { value: "general", label: "General" },
  { value: "ebook", label: "E-Book" },
  { value: "template", label: "Template" },
  { value: "course", label: "Course" },
  { value: "tool", label: "Tool" },
  { value: "design", label: "Design" },
  { value: "software", label: "Software" },
];

function licenseStatusColor(claimed: number, total: number) {
  if (total === 0) return "bg-muted-foreground";
  const pct = (claimed / total) * 100;
  if (pct >= 80) return "bg-red-500";
  if (pct >= 50) return "bg-amber-500";
  return "bg-green-500";
}

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const products = api.products.list.useQuery({
    search: search || undefined,
    category: category || undefined,
    limit: 50,
  });

  const utils = api.useUtils();

  const deleteProduct = api.products.delete.useMutation({
    onSuccess: () => {
      toast.success("Product deleted");
      void utils.products.list.invalidate();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const count = products.data?.items.length ?? 0;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <h1 className="text-sm font-medium">Products</h1>
          {!products.isPending && (
            <Badge variant="secondary" className="font-mono text-[10px] tabular-nums">
              {count}
            </Badge>
          )}
        </div>
        <div className="flex-1" />
        <div className="relative min-w-[200px] max-w-xs">
          <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-8 pl-8 text-xs"
          />
        </div>
        <Select value={category} onValueChange={(v) => setCategory(v ?? "")}>
          <SelectTrigger className="h-8 w-[160px] text-xs">
            <SelectValue placeholder="All Categories">
              {CATEGORIES.find(c => c.value === category)?.label ?? "All Categories"}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button size="sm" render={<Link href="/products/new" />} className="h-8 bg-green-600 text-white hover:bg-green-700">
          <Plus className="size-3.5" />
          New Product
        </Button>
      </div>

      {/* Table */}
      {products.isPending ? (
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
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Name</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Category</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium text-right">Price</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Licenses</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Featured</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Difficulty</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.data?.items.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="h-24 text-center text-xs text-muted-foreground"
                  >
                    No products found.
                  </TableCell>
                </TableRow>
              ) : (
                products.data?.items.map((product) => (
                  <TableRow key={product.id} className="hover:bg-muted/30">
                    <TableCell className="text-xs">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="font-mono text-[10px] text-muted-foreground">
                          {product.slug}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs">
                      <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                        {product.category}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-mono text-xs tabular-nums">
                      {product.isFreeProduct
                        ? "Free"
                        : `$${product.price.toFixed(2)}`}
                    </TableCell>
                    <TableCell className="text-xs">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`inline-block size-1.5 rounded-full ${licenseStatusColor(product.claimedLicenses, product.totalLicenses)}`}
                        />
                        <span className="font-mono text-xs tabular-nums">
                          {product.claimedLicenses} / {product.totalLicenses}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs">
                      {product.featured ? (
                        <span className="inline-block size-2 rounded-full bg-green-500" />
                      ) : (
                        <span className="inline-block size-2 rounded-full border border-muted-foreground/40" />
                      )}
                    </TableCell>
                    <TableCell className="text-xs">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {product.difficulty}
                      </span>
                    </TableCell>
                    <TableCell className="text-xs">
                      <div className="flex items-center gap-0.5">
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          render={<Link href={`/products/${product.id}`} />}
                        >
                          <Pencil className="size-3" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger
                            render={
                              <Button variant="ghost" size="icon-xs">
                                <Trash2 className="size-3 text-destructive" />
                              </Button>
                            }
                          />
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Delete product?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This will permanently delete &quot;{product.name}
                                &quot; and cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                variant="destructive"
                                onClick={() =>
                                  deleteProduct.mutate({ id: product.id })
                                }
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
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
