import { z } from "zod";

export const HOOK_ANGLES = [
  "curiosity",
  "fear",
  "aspiration",
  "contrast",
  "social_proof",
  "urgency",
] as const;

export const AD_PLATFORMS = ["meta", "tiktok", "google"] as const;

export const personaSchema = z.object({
  name: z.string().min(1).describe("Persona display name with age, e.g. 'Sarah, 34'"),
  occupation: z.string().min(1),
  pains: z.array(z.string().min(1)).min(2).max(5),
  desires: z.array(z.string().min(1)).min(2).max(5),
});

export const hookSchema = z.object({
  angle: z.enum(HOOK_ANGLES),
  text: z.string().min(1).max(220),
});

export const adCopySchema = z.object({
  platform: z.enum(AD_PLATFORMS),
  headline: z.string().max(60).optional(),
  primaryText: z.string().min(1).max(500),
  cta: z.string().max(40).optional(),
});

export const marketingKitSchema = z.object({
  targetAudience: z.array(personaSchema).min(1).max(3),
  marketingHooks: z.array(hookSchema).min(4).max(12),
  adCopies: z.array(adCopySchema).min(2).max(6),
});

export type Persona = z.infer<typeof personaSchema>;
export type Hook = z.infer<typeof hookSchema>;
export type AdCopy = z.infer<typeof adCopySchema>;
export type MarketingKit = z.infer<typeof marketingKitSchema>;
