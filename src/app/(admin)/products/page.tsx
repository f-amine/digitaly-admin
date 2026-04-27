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
import { Package, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { KwPageHeader } from "~/components/kw/kw-page-header";
import { useDebounce } from "~/hooks/use-debounce";

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
  const debouncedSearch = useDebounce(search.trim(), 300);

  const products = api.products.list.useQuery({
    search: debouncedSearch || undefined,
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
    <div className="mx-auto max-w-6xl space-y-6">
      <KwPageHeader
        eyebrow="Inventory"
        eyebrowIcon={Package}
        title="Digital"
        highlight="kits."
        description="Browse, edit and add launch kits available to creators."
        actions={
          <div className="flex flex-wrap items-center gap-2">
            {!products.isPending && (
              <Badge variant="secondary" className="font-mono text-[10px] tabular-nums">
                {count}
              </Badge>
            )}
            <div className="relative min-w-[220px] max-w-xs">
              <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 rounded-full border-[#efefef] bg-white pl-9 text-xs dark:border-[#1f1f1f] dark:bg-[#111111]"
              />
            </div>
            <Select value={category} onValueChange={(v) => setCategory(v ?? "")}>
              <SelectTrigger className="h-9 w-[160px] rounded-full text-xs">
                <SelectValue placeholder="All Categories">
                  {CATEGORIES.find((c) => c.value === category)?.label ??
                    "All Categories"}
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
            <Link
              href="/products/new"
              className="group inline-flex h-9 items-center gap-2 rounded-full bg-[#E8431A] px-4 text-[12px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#d63c17]"
              style={{ boxShadow: "rgba(0,0,0,0.18) 0px 4px 0px" }}
            >
              <Plus className="size-3.5" />
              New product
            </Link>
          </div>
        }
      />

      {/* Table */}
      {products.isPending ? (
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
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Name</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">Category</TableHead>
                <TableHead className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium text-right">Tier</TableHead>
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
                      {product.isFreeProduct ? "Free" : "Pro"}
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
