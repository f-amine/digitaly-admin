"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";
import { useFileUpload } from "~/hooks/use-file-upload";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Switch } from "~/components/ui/switch";
import { Checkbox } from "~/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Skeleton } from "~/components/ui/skeleton";
import { Badge } from "~/components/ui/badge";
import { Progress } from "~/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
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
import { ArrowLeft, ExternalLink, Trash2, Upload, Loader2, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { MarketingKitTab } from "./marketing-kit-tab";
import type {
  AdCopy,
  Hook,
  Persona,
} from "~/lib/marketing-kit/schema";

const CATEGORIES = [
  { value: "starter", label: "Starter" },
  { value: "ai_tools", label: "AI Tools" },
  { value: "productivity", label: "Productivity" },
  { value: "social_media", label: "Social Media" },
  { value: "fitness", label: "Fitness" },
  { value: "digital_marketing", label: "Digital Marketing" },
  { value: "freelancing", label: "Freelancing" },
  { value: "side_hustles", label: "Side Hustles" },
];

const DIFFICULTIES = ["BEGINNER", "FAST_LAUNCH", "ADVANCED"] as const;

const SELLING_PLATFORMS = [
  { value: "etsy", label: "Etsy" },
  { value: "gumroad", label: "Gumroad" },
  { value: "shopify", label: "Shopify" },
  { value: "stan_store", label: "Stan Store" },
  { value: "tiktok_shop", label: "TikTok Shop" },
  { value: "lightfunnels", label: "LightFunnels" },
];

const DEMAND_LABELS = [
  { value: "trending", label: "Trending" },
  { value: "high_demand", label: "High Demand" },
  { value: "beginner_friendly", label: "Beginner Friendly" },
  { value: "new", label: "New" },
];

const LANGUAGES = [
  { value: "en", label: "English", flag: "🇬🇧" },
  { value: "ar", label: "Arabic", flag: "🇸🇦" },
  { value: "fr", label: "French", flag: "🇫🇷" },
  { value: "es", label: "Spanish", flag: "🇪🇸" },
  { value: "tr", label: "Turkish", flag: "🇹🇷" },
];

const ASSET_TYPES = [
  { value: "product_file", label: "Product File" },
  { value: "canva_template", label: "Canva Template" },
  { value: "marketing_kit", label: "Marketing Kit" },
  { value: "sales_copy", label: "Sales Copy" },
  { value: "branding_kit", label: "Branding Kit" },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

export default function EditProductPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const productId = params.id as string;
  const defaultTab = searchParams.get("tab") ?? "details";
  const coverInputRef = useRef<HTMLInputElement>(null);
  const assetInputRef = useRef<HTMLInputElement>(null);

  const product = api.products.getById.useQuery({ id: productId });
  const utils = api.useUtils();

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [image, setImage] = useState("");
  const [isFreeProduct, setIsFreeProduct] = useState(false);
  const [totalLicenses, setTotalLicenses] = useState("100");
  const [category, setCategory] = useState("starter");
  const [featured, setFeatured] = useState(false);
  const [difficulty, setDifficulty] =
    useState<(typeof DIFFICULTIES)[number]>("BEGINNER");
  const [sellingPlatforms, setSellingPlatforms] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [demandLabel, setDemandLabel] = useState("");
  const [claimedLicenses, setClaimedLicenses] = useState("0");
  const [exclusiveLicensePrice, setExclusiveLicensePrice] = useState("");
  const [exclusiveLicenseSold, setExclusiveLicenseSold] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [coverUploading, setCoverUploading] = useState(false);

  // Asset upload state
  const [assetName, setAssetName] = useState("");
  const [selectedAssetType, setSelectedAssetType] = useState("product_file");
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);
  const [assetSource, setAssetSource] = useState<"file" | "link">("file");
  const [assetUrl, setAssetUrl] = useState("");

  useEffect(() => {
    if (product.data && !initialized) {
      setName(product.data.name);
      setSlug(product.data.slug);
      setDescription(product.data.description);
      setShortDescription(product.data.shortDescription);
      setImage(product.data.image ?? "");
      setIsFreeProduct(product.data.isFreeProduct);
      setTotalLicenses(product.data.totalLicenses.toString());
      setCategory(product.data.category);
      setFeatured(product.data.featured);
      setDifficulty(product.data.difficulty as (typeof DIFFICULTIES)[number]);
      setSellingPlatforms(product.data.sellingPlatforms);
      setLanguages(product.data.languages ?? []);
      setDemandLabel(product.data.demandLabel ?? "");
      setClaimedLicenses(product.data.claimedLicenses.toString());
      setExclusiveLicensePrice(
        product.data.exclusiveLicensePrice != null
          ? product.data.exclusiveLicensePrice.toString()
          : "",
      );
      setExclusiveLicenseSold(product.data.exclusiveLicenseSold ?? false);
      setInitialized(true);
    }
  }, [product.data, initialized]);

  const updateProduct = api.products.update.useMutation({
    onSuccess: () => {
      toast.success("Product updated successfully");
      void utils.products.getById.invalidate({ id: productId });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const createAsset = api.products.createAsset.useMutation({
    onSuccess: () => {
      toast.success("Asset added");
      setAssetName("");
      setUploadingFile(null);
      setAssetUrl("");
      void utils.products.getById.invalidate({ id: productId });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const deleteAsset = api.products.deleteAsset.useMutation({
    onSuccess: () => {
      toast.success("Asset deleted");
      void utils.products.getById.invalidate({ id: productId });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleAssetUploadComplete = useCallback(
    (result: { key: string; url: string }) => {
      createAsset.mutate({
        productId,
        name: assetName || (result.key.split("/").pop() ?? "Asset"),
        type: selectedAssetType,
        fileUrl: result.url,
        fileSize: formatFileSize(uploadingFile?.size ?? 0),
      });
    },
    [productId, assetName, selectedAssetType, uploadingFile, createAsset],
  );

  const handleAssetUploadError = useCallback(
    (err: Error) => {
      toast.error(err.message);
    },
    [],
  );

  const assetUpload = useFileUpload({
    productId,
    onComplete: handleAssetUploadComplete,
    onError: handleAssetUploadError,
  });

  const handleNameChange = (value: string) => {
    setName(value);
    setSlug(slugify(value));
  };

  const togglePlatform = (platform: string) => {
    setSellingPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform],
    );
  };

  const toggleLanguage = (lang: string) => {
    setLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang],
    );
  };

  const handleCoverUpload = async (file: File) => {
    setCoverUploading(true);
    try {
      const initRes = await fetch("/api/upload/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type,
          productId: slug ?? productId,
        }),
      });
      if (!initRes.ok) {
        const err = await initRes.text();
        throw new Error(`Initiate upload failed (${initRes.status}): ${err}`);
      }
      const initData: { uploadId: string; key: string } = await initRes.json() as { uploadId: string; key: string };

      const presignRes = await fetch("/api/upload/presign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: initData.key, uploadId: initData.uploadId, partNumber: 1 }),
      });
      if (!presignRes.ok) {
        const err = await presignRes.text();
        throw new Error(`Presign failed (${presignRes.status}): ${err}`);
      }
      const presignData: { presignedUrl: string } = await presignRes.json() as { presignedUrl: string };

      const uploadRes = await fetch(presignData.presignedUrl, {
        method: "PUT",
        body: file,
      });
      if (!uploadRes.ok) {
        throw new Error(`R2 upload failed (${uploadRes.status})`);
      }
      const etag = uploadRes.headers.get("ETag");
      if (!etag) {
        throw new Error("R2 upload succeeded but ETag header missing — check R2 CORS config (Access-Control-Expose-Headers must include ETag)");
      }

      const completeRes = await fetch("/api/upload/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: initData.key,
          uploadId: initData.uploadId,
          parts: [{ ETag: etag, PartNumber: 1 }],
        }),
      });
      if (!completeRes.ok) {
        const err = await completeRes.text();
        throw new Error(`Complete upload failed (${completeRes.status}): ${err}`);
      }
      const completeData: { url: string } = await completeRes.json() as { url: string };
      setImage(completeData.url);
      toast.success("Cover image uploaded");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to upload cover image");
    } finally {
      setCoverUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProduct.mutate({
      id: productId,
      data: {
        name,
        slug,
        description,
        shortDescription,
        image: image || undefined,
        isFreeProduct,
        totalLicenses: parseInt(totalLicenses) || 100,
        claimedLicenses: parseInt(claimedLicenses) || 0,
        category,
        featured,
        difficulty,
        sellingPlatforms,
        languages,
        demandLabel: demandLabel || null,
        exclusiveLicensePrice:
          exclusiveLicensePrice.trim() === ""
            ? null
            : parseFloat(exclusiveLicensePrice),
        exclusiveLicenseSold,
      },
    });
  };

  const handleAssetFileSelect = (file: File) => {
    setUploadingFile(file);
    if (!assetName) {
      setAssetName(file.name.replace(/\.[^.]+$/, ""));
    }
  };

  const handleStartAssetUpload = () => {
    if (!uploadingFile) {
      toast.error("Please select a file first");
      return;
    }
    if (!assetName) {
      toast.error("Please enter an asset name");
      return;
    }
    void assetUpload.upload(uploadingFile);
  };

  const handleAddAssetLink = () => {
    const trimmed = assetUrl.trim();
    if (!assetName) {
      toast.error("Please enter an asset name");
      return;
    }
    if (!/^https?:\/\//i.test(trimmed)) {
      toast.error("Please enter a valid URL starting with http(s)://");
      return;
    }
    createAsset.mutate({
      productId,
      name: assetName,
      type: selectedAssetType,
      fileUrl: trimmed,
    });
  };

  if (product.isPending) {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    );
  }

  if (product.error) {
    return (
      <div className="flex items-center justify-center py-12 text-muted-foreground">
        Product not found
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon-sm"
          render={<Link href="/products" />}
          aria-label="Back to products"
        >
          <ArrowLeft className="size-4" />
        </Button>
        <h2 className="text-lg font-semibold">Edit Product</h2>
      </div>

      <Tabs defaultValue={defaultTab}>
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="assets">
            Assets ({product.data?.assets.length ?? 0})
          </TabsTrigger>
          <TabsTrigger value="marketing">Marketing Kit</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="Product name"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Slug:{" "}
                    <code className="rounded bg-muted px-1">
                      {slug || "..."}
                    </code>
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="shortDescription">Short Description</Label>
                  <Input
                    id="shortDescription"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    placeholder="Brief product summary"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Full product description..."
                    rows={5}
                    required
                  />
                </div>

                {/* Cover Image Upload */}
                <div className="grid gap-2">
                  <Label>Cover Image</Label>
                  <input
                    ref={coverInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) void handleCoverUpload(file);
                      e.target.value = "";
                    }}
                  />
                  {image ? (
                    <div className="relative w-full overflow-hidden rounded-lg border">
                      <Image
                        src={image}
                        alt="Cover preview"
                        width={600}
                        height={300}
                        className="h-48 w-full object-cover"
                      />
                      <div className="absolute right-2 top-2 flex gap-1">
                        <Button
                          type="button"
                          size="sm"
                          variant="secondary"
                          onClick={() => coverInputRef.current?.click()}
                          disabled={coverUploading}
                        >
                          Change
                        </Button>
                        <Button
                          type="button"
                          size="icon-sm"
                          variant="destructive"
                          onClick={() => setImage("")}
                          aria-label="Remove cover image"
                        >
                          <X className="size-3.5" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => coverInputRef.current?.click()}
                      disabled={coverUploading}
                      className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/25 text-sm text-muted-foreground transition-colors hover:border-muted-foreground/50 hover:bg-muted/50"
                    >
                      {coverUploading ? (
                        <>
                          <Loader2 className="size-6 animate-spin" />
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="size-6" />
                          <span>Upload Cover Image</span>
                          <span className="text-xs">PNG, JPG, WebP</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Licenses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="totalLicenses">Total Licenses</Label>
                    <Input
                      id="totalLicenses"
                      type="number"
                      min="1"
                      value={totalLicenses}
                      onChange={(e) => setTotalLicenses(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="claimedLicenses">Claimed Licenses</Label>
                  <Input
                    id="claimedLicenses"
                    type="number"
                    min="0"
                    value={claimedLicenses}
                    onChange={(e) => setClaimedLicenses(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Admin override. Use for scarcity seeding.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Switch
                    id="isFreeProduct"
                    checked={isFreeProduct}
                    onCheckedChange={setIsFreeProduct}
                  />
                  <Label htmlFor="isFreeProduct">Free Product</Label>
                </div>

                <div className="flex items-center gap-3">
                  <Switch
                    id="featured"
                    checked={featured}
                    onCheckedChange={setFeatured}
                  />
                  <Label htmlFor="featured">Featured</Label>
                </div>

                <Separator />

                <div className="grid gap-2">
                  <Label htmlFor="exclusiveLicensePrice">
                    Exclusive License Price ($)
                  </Label>
                  <Input
                    id="exclusiveLicensePrice"
                    type="number"
                    min="0"
                    step="0.01"
                    value={exclusiveLicensePrice}
                    onChange={(e) => setExclusiveLicensePrice(e.target.value)}
                    placeholder="Leave empty to disable"
                  />
                  <p className="text-xs text-muted-foreground">
                    One-time buyout price for full ownership.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Switch
                    id="exclusiveLicenseSold"
                    checked={exclusiveLicenseSold}
                    onCheckedChange={setExclusiveLicenseSold}
                  />
                  <Label htmlFor="exclusiveLicenseSold">
                    Exclusive License Sold
                  </Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Classification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={(v) => setCategory(v ?? "")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category...">
                          {CATEGORIES.find(c => c.value === category)?.label ?? "Select category..."}
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
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <Select value={difficulty} onValueChange={(v) => setDifficulty(v ?? "BEGINNER")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select difficulty...">
                          {difficulty.replace(/_/g, " ")}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {DIFFICULTIES.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d.replace(/_/g, " ")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="demandLabel">Demand Label</Label>
                  <Select value={demandLabel} onValueChange={(v) => setDemandLabel(v ?? "")}>
                    <SelectTrigger>
                      <SelectValue placeholder="None">
                        {DEMAND_LABELS.find(d => d.value === demandLabel)?.label ?? "None"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">None</SelectItem>
                      {DEMAND_LABELS.map((d) => (
                        <SelectItem key={d.value} value={d.value}>
                          {d.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="grid gap-2">
                  <Label>Selling Platforms</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {SELLING_PLATFORMS.map((platform) => (
                      <label
                        key={platform.value}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Checkbox
                          checked={sellingPlatforms.includes(platform.value)}
                          onCheckedChange={() =>
                            togglePlatform(platform.value)
                          }
                        />
                        {platform.label}
                      </label>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="grid gap-2">
                  <Label>Languages</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {LANGUAGES.map((lang) => (
                      <label
                        key={lang.value}
                        className="flex items-center gap-2 text-sm"
                      >
                        <Checkbox
                          checked={languages.includes(lang.value)}
                          onCheckedChange={() => toggleLanguage(lang.value)}
                        />
                        <span>{lang.flag}</span>
                        {lang.label}
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                render={<Link href="/products" />}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={updateProduct.isPending}>
                {updateProduct.isPending ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="assets">
          <div className="space-y-4 pt-4">
            {/* Add Asset Form */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Asset</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="assetName">Asset Name</Label>
                    <Input
                      id="assetName"
                      value={assetName}
                      onChange={(e) => setAssetName(e.target.value)}
                      placeholder="e.g. Main Product File"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="assetType">Asset Type</Label>
                    <Select value={selectedAssetType} onValueChange={(v) => setSelectedAssetType(v ?? "product_file")}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type...">
                          {ASSET_TYPES.find(t => t.value === selectedAssetType)?.label ?? "Select type..."}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {ASSET_TYPES.map((t) => (
                          <SelectItem key={t.value} value={t.value}>
                            {t.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Source toggle: file vs external link */}
                <div className="grid gap-2">
                  <Label>Source</Label>
                  <div className="inline-flex rounded-lg border p-1 w-fit">
                    <button
                      type="button"
                      onClick={() => setAssetSource("file")}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors ${
                        assetSource === "file"
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Upload className="size-3.5" />
                      File upload
                    </button>
                    <button
                      type="button"
                      onClick={() => setAssetSource("link")}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors ${
                        assetSource === "link"
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <ExternalLink className="size-3.5" />
                      External link
                    </button>
                  </div>
                  {assetSource === "link" && (
                    <p className="text-xs text-muted-foreground">
                      Use for Canva templates, Google Drive folders, Notion docs,
                      and other hosted resources.
                    </p>
                  )}
                </div>

                {assetSource === "link" ? (
                  <div className="space-y-3">
                    <div className="grid gap-2">
                      <Label htmlFor="assetUrl">URL</Label>
                      <Input
                        id="assetUrl"
                        type="url"
                        value={assetUrl}
                        onChange={(e) => setAssetUrl(e.target.value)}
                        placeholder="https://www.canva.com/design/..."
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={handleAddAssetLink}
                      disabled={
                        !assetName || !assetUrl.trim() || createAsset.isPending
                      }
                      className="w-full"
                    >
                      <ExternalLink className="mr-2 size-4" />
                      {createAsset.isPending ? "Adding..." : "Add Link"}
                    </Button>
                  </div>
                ) : (
                <>
                {/* File drop zone */}
                <input
                  ref={assetInputRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleAssetFileSelect(file);
                    e.target.value = "";
                  }}
                />

                {assetUpload.state.status === "uploading" ? (
                  <div className="space-y-3 rounded-lg border p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="truncate font-medium">
                        {assetUpload.state.fileName}
                      </span>
                      <span className="text-muted-foreground">
                        {assetUpload.state.progress}%
                      </span>
                    </div>
                    <Progress value={assetUpload.state.progress} />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => void assetUpload.abort()}
                    >
                      Cancel Upload
                    </Button>
                  </div>
                ) : uploadingFile ? (
                  <div className="space-y-3 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                          {uploadingFile.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatFileSize(uploadingFile.size)}
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => {
                          setUploadingFile(null);
                          setAssetName("");
                        }}
                        aria-label="Remove selected file"
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                    <Button
                      type="button"
                      onClick={handleStartAssetUpload}
                      disabled={!assetName || createAsset.isPending}
                      className="w-full"
                    >
                      <Upload className="mr-2 size-4" />
                      Upload Asset
                    </Button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => assetInputRef.current?.click()}
                    className="flex h-32 w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/25 text-sm text-muted-foreground transition-colors hover:border-muted-foreground/50 hover:bg-muted/50"
                  >
                    <Upload className="size-6" />
                    <span>Select file to upload</span>
                    <span className="text-xs">Any file type supported</span>
                  </button>
                )}

                {assetUpload.state.status === "error" && (
                  <p className="text-sm text-destructive">
                    Upload failed: {assetUpload.state.error}
                  </p>
                )}
                </>
                )}
              </CardContent>
            </Card>

            {/* Asset List */}
            <Card>
              <CardHeader>
                <CardTitle>
                  Assets ({product.data?.assets.length ?? 0})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {product.data?.assets.length === 0 ? (
                  <p className="py-4 text-center text-sm text-muted-foreground">
                    No assets yet.
                  </p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead className="w-16">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {product.data?.assets.map((asset) => {
                        const isLink = /^https?:\/\//i.test(asset.fileUrl);
                        return (
                        <TableRow key={asset.id}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <span>{asset.name}</span>
                              {isLink && (
                                <a
                                  href={asset.fileUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-muted-foreground hover:text-foreground"
                                  aria-label={`Open ${asset.name}`}
                                >
                                  <ExternalLink className="size-3.5" />
                                </a>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1.5">
                              <Badge variant="secondary">{asset.type}</Badge>
                              {isLink && (
                                <Badge variant="outline" className="text-xs">
                                  link
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {asset.fileSize ?? (isLink ? "External" : "---")}
                          </TableCell>
                          <TableCell>
                            <AlertDialog>
                              <AlertDialogTrigger
                                render={
                                  <Button
                                    variant="ghost"
                                    size="icon-xs"
                                    aria-label={`Delete asset ${asset.name}`}
                                  >
                                    <Trash2 className="size-3.5 text-destructive" />
                                  </Button>
                                }
                              />
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Delete asset?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This will permanently delete &quot;
                                    {asset.name}&quot;.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    variant="destructive"
                                    onClick={() =>
                                      deleteAsset.mutate({ id: asset.id })
                                    }
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </TableCell>
                        </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="marketing">
          <MarketingKitTab
            productId={productId}
            initial={{
              targetAudience:
                (product.data?.targetAudience as Persona[] | null) ?? null,
              marketingHooks:
                (product.data?.marketingHooks as Hook[] | null) ?? null,
              adCopies: (product.data?.adCopies as AdCopy[] | null) ?? null,
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
