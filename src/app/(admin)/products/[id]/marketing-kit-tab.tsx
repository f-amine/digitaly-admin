"use client";

import { useEffect, useState } from "react";
import {
  AlertTriangle,
  Loader2,
  Plus,
  Save,
  Sparkles,
  Trash2,
  Users,
  Wand2,
  Megaphone,
  X,
} from "lucide-react";
import { toast } from "sonner";

import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Badge } from "~/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
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
import {
  type AdCopy,
  type Hook,
  type Persona,
  AD_PLATFORMS,
  HOOK_ANGLES,
} from "~/lib/marketing-kit/schema";

const HOOK_ANGLE_OPTIONS: { value: Hook["angle"]; label: string }[] = [
  { value: "curiosity", label: "Curiosity" },
  { value: "fear", label: "Fear" },
  { value: "aspiration", label: "Aspiration" },
  { value: "contrast", label: "Contrast" },
  { value: "social_proof", label: "Social Proof" },
  { value: "urgency", label: "Urgency" },
];

const AD_PLATFORM_OPTIONS: { value: AdCopy["platform"]; label: string }[] = [
  { value: "meta", label: "Meta" },
  { value: "tiktok", label: "TikTok" },
  { value: "google", label: "Google" },
];

interface MarketingKitTabProps {
  productId: string;
  initial: {
    targetAudience: Persona[] | null;
    marketingHooks: Hook[] | null;
    adCopies: AdCopy[] | null;
  };
}

function ensureHookAngle(value: string): Hook["angle"] {
  return (HOOK_ANGLES as readonly string[]).includes(value)
    ? (value as Hook["angle"])
    : "curiosity";
}

function ensureAdPlatform(value: string): AdCopy["platform"] {
  return (AD_PLATFORMS as readonly string[]).includes(value)
    ? (value as AdCopy["platform"])
    : "meta";
}

export function MarketingKitTab({ productId, initial }: MarketingKitTabProps) {
  const utils = api.useUtils();

  const [personas, setPersonas] = useState<Persona[]>(
    initial.targetAudience ?? [],
  );
  const [hooks, setHooks] = useState<Hook[]>(initial.marketingHooks ?? []);
  const [ads, setAds] = useState<AdCopy[]>(initial.adCopies ?? []);
  const [dirty, setDirty] = useState(false);

  // Sync server values into local state when they change after mount
  // (e.g. after AI generation invalidates the query)
  useEffect(() => {
    setPersonas(initial.targetAudience ?? []);
    setHooks(initial.marketingHooks ?? []);
    setAds(initial.adCopies ?? []);
    setDirty(false);
  }, [initial.targetAudience, initial.marketingHooks, initial.adCopies]);

  const updateProduct = api.products.update.useMutation({
    onSuccess: () => {
      toast.success("Marketing kit saved");
      void utils.products.getById.invalidate({ id: productId });
      setDirty(false);
    },
    onError: (err) => toast.error(err.message),
  });

  const generate = api.products.generateMarketingKit.useMutation({
    onSuccess: () => {
      toast.success("Marketing kit generated");
      void utils.products.getById.invalidate({ id: productId });
    },
    onError: (err) => toast.error(err.message),
  });

  const handleSave = () => {
    updateProduct.mutate({
      id: productId,
      data: {
        targetAudience: personas,
        marketingHooks: hooks,
        adCopies: ads,
      },
    });
  };

  const markDirty = () => setDirty(true);

  // Persona helpers
  const addPersona = () => {
    setPersonas((prev) => [
      ...prev,
      { name: "", occupation: "", pains: [""], desires: [""] },
    ]);
    markDirty();
  };
  const updatePersona = <K extends keyof Persona>(
    idx: number,
    key: K,
    value: Persona[K],
  ) => {
    setPersonas((prev) =>
      prev.map((p, i) => (i === idx ? { ...p, [key]: value } : p)),
    );
    markDirty();
  };
  const removePersona = (idx: number) => {
    setPersonas((prev) => prev.filter((_, i) => i !== idx));
    markDirty();
  };

  // Hook helpers
  const addHook = () => {
    setHooks((prev) => [...prev, { angle: "curiosity", text: "" }]);
    markDirty();
  };
  const updateHook = <K extends keyof Hook>(
    idx: number,
    key: K,
    value: Hook[K],
  ) => {
    setHooks((prev) =>
      prev.map((h, i) => (i === idx ? { ...h, [key]: value } : h)),
    );
    markDirty();
  };
  const removeHook = (idx: number) => {
    setHooks((prev) => prev.filter((_, i) => i !== idx));
    markDirty();
  };

  // Ad copy helpers
  const addAd = () => {
    setAds((prev) => [
      ...prev,
      { platform: "meta", headline: "", primaryText: "", cta: "" },
    ]);
    markDirty();
  };
  const updateAd = <K extends keyof AdCopy>(
    idx: number,
    key: K,
    value: AdCopy[K],
  ) => {
    setAds((prev) =>
      prev.map((a, i) => (i === idx ? { ...a, [key]: value } : a)),
    );
    markDirty();
  };
  const removeAd = (idx: number) => {
    setAds((prev) => prev.filter((_, i) => i !== idx));
    markDirty();
  };

  const hasAny = personas.length > 0 || hooks.length > 0 || ads.length > 0;

  return (
    <div className="space-y-6 pt-4">
      {/* Top action strip */}
      <Card>
        <CardContent className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400">
              <Sparkles className="size-4" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium">AI Marketing Kit</p>
              <p className="text-xs text-muted-foreground">
                Generates personas, hooks, and ad copies from product details.
                {hasAny && " Re-generating overwrites current content."}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <AlertDialog>
              <AlertDialogTrigger
                render={
                  <Button
                    type="button"
                    variant={hasAny ? "outline" : "default"}
                    disabled={generate.isPending}
                  >
                    {generate.isPending ? (
                      <>
                        <Loader2 className="mr-2 size-3.5 animate-spin" />
                        Generating…
                      </>
                    ) : (
                      <>
                        <Wand2 className="mr-2 size-3.5" />
                        {hasAny ? "Regenerate" : "Generate with AI"}
                      </>
                    )}
                  </Button>
                }
              />
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    {hasAny ? "Overwrite current marketing kit?" : "Generate marketing kit?"}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {hasAny ? (
                      <span className="flex items-start gap-2 text-amber-700 dark:text-amber-300">
                        <AlertTriangle className="mt-0.5 size-4 shrink-0" />
                        AI output will replace the current personas, hooks,
                        and ad copies. Unsaved manual edits will be lost.
                      </span>
                    ) : (
                      "Gemini will draft personas, hooks, and ad copies based on this product's details. Saved automatically."
                    )}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => generate.mutate({ id: productId })}
                  >
                    {hasAny ? "Overwrite" : "Generate"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button
              type="button"
              onClick={handleSave}
              disabled={!dirty || updateProduct.isPending}
            >
              {updateProduct.isPending ? (
                <>
                  <Loader2 className="mr-2 size-3.5 animate-spin" />
                  Saving…
                </>
              ) : (
                <>
                  <Save className="mr-2 size-3.5" />
                  Save
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Section: Target Audience */}
      <Card>
        <CardHeader className="flex-row items-start justify-between space-y-0">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Users className="size-4" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                §01 · Target Audience
              </CardTitle>
              <p className="mt-1 text-sm font-medium">
                {personas.length} persona{personas.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={addPersona}
          >
            <Plus className="mr-1.5 size-3.5" />
            Persona
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {personas.length === 0 && (
            <p className="rounded-lg border border-dashed py-6 text-center text-sm text-muted-foreground">
              No personas yet. Generate with AI or add manually.
            </p>
          )}
          {personas.map((persona, idx) => (
            <PersonaEditor
              key={idx}
              persona={persona}
              index={idx}
              onChange={(key, value) => updatePersona(idx, key, value)}
              onRemove={() => removePersona(idx)}
            />
          ))}
        </CardContent>
      </Card>

      {/* Section: Hooks */}
      <Card>
        <CardHeader className="flex-row items-start justify-between space-y-0">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Sparkles className="size-4" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                §02 · Marketing Hooks
              </CardTitle>
              <p className="mt-1 text-sm font-medium">
                {hooks.length} hook{hooks.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>
          <Button type="button" variant="ghost" size="sm" onClick={addHook}>
            <Plus className="mr-1.5 size-3.5" />
            Hook
          </Button>
        </CardHeader>
        <CardContent className="space-y-2">
          {hooks.length === 0 && (
            <p className="rounded-lg border border-dashed py-6 text-center text-sm text-muted-foreground">
              No hooks yet.
            </p>
          )}
          {hooks.map((hook, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 rounded-lg border bg-card/40 p-2"
            >
              <span className="mt-2 w-7 shrink-0 text-center font-mono text-[10px] tabular-nums text-muted-foreground">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="grid flex-1 gap-2 sm:grid-cols-[140px_1fr]">
                <Select
                  value={hook.angle}
                  onValueChange={(v) =>
                    updateHook(idx, "angle", ensureHookAngle(v ?? "curiosity"))
                  }
                >
                  <SelectTrigger className="h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {HOOK_ANGLE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea
                  value={hook.text}
                  onChange={(e) => updateHook(idx, "text", e.target.value)}
                  placeholder="Hook text…"
                  className="min-h-9 resize-none"
                  rows={2}
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => removeHook(idx)}
                aria-label="Remove hook"
              >
                <X className="size-3.5" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Section: Ad Copies */}
      <Card>
        <CardHeader className="flex-row items-start justify-between space-y-0">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400">
              <Megaphone className="size-4" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                §03 · Ad Copies
              </CardTitle>
              <p className="mt-1 text-sm font-medium">
                {ads.length} ad{ads.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>
          <Button type="button" variant="ghost" size="sm" onClick={addAd}>
            <Plus className="mr-1.5 size-3.5" />
            Ad
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {ads.length === 0 && (
            <p className="rounded-lg border border-dashed py-6 text-center text-sm text-muted-foreground">
              No ad copies yet.
            </p>
          )}
          {ads.map((ad, idx) => (
            <AdCopyEditor
              key={idx}
              ad={ad}
              onChange={(key, value) => updateAd(idx, key, value)}
              onPlatformChange={(v) => updateAd(idx, "platform", ensureAdPlatform(v))}
              onRemove={() => removeAd(idx)}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function PersonaEditor({
  persona,
  index,
  onChange,
  onRemove,
}: {
  persona: Persona;
  index: number;
  onChange: <K extends keyof Persona>(key: K, value: Persona[K]) => void;
  onRemove: () => void;
}) {
  const updateList = (
    field: "pains" | "desires",
    listIdx: number,
    value: string,
  ) => {
    const next = persona[field].slice();
    next[listIdx] = value;
    onChange(field, next);
  };

  const addItem = (field: "pains" | "desires") => {
    onChange(field, [...persona[field], ""]);
  };

  const removeItem = (field: "pains" | "desires", listIdx: number) => {
    onChange(
      field,
      persona[field].filter((_, i) => i !== listIdx),
    );
  };

  return (
    <div className="rounded-xl border bg-card/40 p-4">
      <div className="flex items-center justify-between">
        <Badge
          variant="outline"
          className="font-mono text-[10px] uppercase tracking-wider"
        >
          Persona {String(index + 1).padStart(2, "0")}
        </Badge>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={onRemove}
          aria-label="Remove persona"
        >
          <Trash2 className="size-3.5 text-destructive" />
        </Button>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label className="text-xs">Name &amp; age</Label>
          <Input
            value={persona.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="e.g. Sarah, 34"
          />
        </div>
        <div className="grid gap-1.5">
          <Label className="text-xs">Occupation / identity</Label>
          <Input
            value={persona.occupation}
            onChange={(e) => onChange("occupation", e.target.value)}
            placeholder="e.g. Burnt-out office mom"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <ListEditor
          title="Pains"
          accent="text-red-600 dark:text-red-400"
          items={persona.pains}
          onChange={(i, v) => updateList("pains", i, v)}
          onAdd={() => addItem("pains")}
          onRemove={(i) => removeItem("pains", i)}
        />
        <ListEditor
          title="Desires"
          accent="text-emerald-600 dark:text-emerald-400"
          items={persona.desires}
          onChange={(i, v) => updateList("desires", i, v)}
          onAdd={() => addItem("desires")}
          onRemove={(i) => removeItem("desires", i)}
        />
      </div>
    </div>
  );
}

function ListEditor({
  title,
  accent,
  items,
  onChange,
  onAdd,
  onRemove,
}: {
  title: string;
  accent: string;
  items: string[];
  onChange: (idx: number, value: string) => void;
  onAdd: () => void;
  onRemove: (idx: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span
          className={`font-mono text-[10px] font-semibold uppercase tracking-[0.16em] ${accent}`}
        >
          {title}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="xs"
          onClick={onAdd}
          className="h-6 px-2"
        >
          <Plus className="size-3" />
        </Button>
      </div>
      <div className="space-y-1.5">
        {items.length === 0 && (
          <p className="text-[11px] text-muted-foreground italic">
            No items yet.
          </p>
        )}
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-1.5">
            <Input
              value={item}
              onChange={(e) => onChange(i, e.target.value)}
              className="h-8 text-xs"
              placeholder={`${title.slice(0, -1)}…`}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              onClick={() => onRemove(i)}
              aria-label={`Remove ${title.toLowerCase()} item`}
            >
              <X className="size-3" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdCopyEditor({
  ad,
  onChange,
  onPlatformChange,
  onRemove,
}: {
  ad: AdCopy;
  onChange: <K extends keyof AdCopy>(key: K, value: AdCopy[K]) => void;
  onPlatformChange: (value: string) => void;
  onRemove: () => void;
}) {
  return (
    <div className="rounded-xl border bg-card/40 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Select value={ad.platform} onValueChange={(v) => onPlatformChange(v ?? "meta")}>
            <SelectTrigger className="h-8 w-[130px] font-mono text-[11px] uppercase tracking-wider">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {AD_PLATFORM_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={onRemove}
          aria-label="Remove ad copy"
        >
          <Trash2 className="size-3.5 text-destructive" />
        </Button>
      </div>

      <div className="mt-3 grid gap-3">
        <div className="grid gap-1.5">
          <div className="flex items-center justify-between">
            <Label className="text-xs">Headline (optional)</Label>
            <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
              {ad.headline?.length ?? 0}
            </span>
          </div>
          <Input
            value={ad.headline ?? ""}
            onChange={(e) => onChange("headline", e.target.value)}
            placeholder="Headline…"
          />
        </div>
        <div className="grid gap-1.5">
          <div className="flex items-center justify-between">
            <Label className="text-xs">Primary text</Label>
            <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
              {ad.primaryText.length}
            </span>
          </div>
          <Textarea
            value={ad.primaryText}
            onChange={(e) => onChange("primaryText", e.target.value)}
            placeholder="Body copy…"
            rows={4}
          />
        </div>
        <div className="grid gap-1.5">
          <Label className="text-xs">CTA (optional)</Label>
          <Input
            value={ad.cta ?? ""}
            onChange={(e) => onChange("cta", e.target.value)}
            placeholder="e.g. Shop now"
          />
        </div>
      </div>
    </div>
  );
}
