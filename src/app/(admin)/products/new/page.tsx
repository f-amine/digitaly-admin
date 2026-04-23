"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Switch } from "~/components/ui/switch";
import { Checkbox } from "~/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft, Upload, Loader2, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function NewProductPage() {
  const router = useRouter();
  const coverInputRef = useRef<HTMLInputElement>(null);

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
  const [coverUploading, setCoverUploading] = useState(false);

  const createProduct = api.products.create.useMutation({
    onSuccess: (product) => {
      toast.success("Product created! Now upload your digital files.");
      router.push(`/products/${product.id}?tab=assets`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
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
          productId: slug ?? "new",
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
    createProduct.mutate({
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
      demandLabel: demandLabel || undefined,
      exclusiveLicensePrice:
        exclusiveLicensePrice.trim() === ""
          ? undefined
          : parseFloat(exclusiveLicensePrice),
      exclusiveLicenseSold,
    });
  };

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
        <h2 className="text-lg font-semibold">Create New Product</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
                <code className="rounded bg-muted px-1">{slug || "..."}</code>
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
              <Label htmlFor="claimedLicenses">Claimed Licenses (initial)</Label>
              <Input
                id="claimedLicenses"
                type="number"
                min="0"
                value={claimedLicenses}
                onChange={(e) => setClaimedLicenses(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Use for scarcity seeding. Auto-increments on real claims.
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
              <Label htmlFor="exclusiveLicensePrice">Exclusive License Price ($)</Label>
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
                One-time buyout: whoever pays this owns all remaining licenses.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Switch
                id="exclusiveLicenseSold"
                checked={exclusiveLicenseSold}
                onCheckedChange={setExclusiveLicenseSold}
              />
              <Label htmlFor="exclusiveLicenseSold">Exclusive License Sold</Label>
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
                      onCheckedChange={() => togglePlatform(platform.value)}
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
          <Button type="submit" disabled={createProduct.isPending}>
            {createProduct.isPending ? "Creating\u2026" : "Create & Upload Files"}
          </Button>
        </div>
      </form>
    </div>
  );
}
