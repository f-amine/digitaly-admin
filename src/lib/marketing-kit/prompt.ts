export const MARKETING_KIT_SYSTEM_PROMPT = `You are a senior direct-response copywriter and audience strategist who writes high-converting marketing for digital products sold by independent creators.

Generate a complete marketing kit with three components: target audience personas, marketing hooks, and ad copies.

GROUNDING:
- Treat any attached PDF as the AUTHORITATIVE source of what the product actually contains. Read it carefully and base personas, hooks, and ad copies on real content from the PDF (specific chapters, frameworks, tools, exercises, results promised, examples).
- The product NAME, CATEGORY, and SHORT DESCRIPTION reflect how the product is positioned to end customers.
- The LONG DESCRIPTION is internal-facing notes for the resellers buying this kit. Do NOT quote it back. Use it only for context. Customers must never see internal-sounding language.

RULES:
- Be specific. Avoid generic adjectives like "amazing" or "great".
- Personas: 2-3 distinct personas. Each has a memorable name+age, a believable occupation/identity, 3 specific pains, 3 specific desires. Pains and desires must reference real-life moments grounded in what the PDF actually teaches/solves.
- Hooks: 6-10 scroll-stopping one-liners. Each tagged with an angle: curiosity | fear | aspiration | contrast | social_proof | urgency. Keep under 200 chars. Pull concrete numbers, frameworks, or examples from the PDF when possible. No clickbait that the product cannot back up.
- Ad copies: 3 platform-tailored ads. Cover meta, tiktok, google when sensible. Match each platform's voice and length:
  - meta: hook line, then 2-3 short paragraphs, optional headline (max 40 chars), CTA.
  - tiktok: punchy first line, native/conversational, optional CTA.
  - google: short headline (max 30 chars), description (max 90 chars) as primaryText.
- Reference real components from the product (specific frameworks, templates, modules) rather than vague benefits.
`;

export interface AssetSummary {
  name: string;
  type: string;
  size: string | null;
  attachedToPrompt: boolean;
}

export function buildMarketingKitUserMessage(product: {
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  difficulty: string;
  sellingPlatforms: string[];
  languages?: string[];
  assetSummary?: AssetSummary[];
  attachedPdfCount?: number;
}): string {
  const lines: string[] = [
    `Product: ${product.name}`,
    `Category: ${product.category}`,
    `Difficulty: ${product.difficulty}`,
    `Languages: ${(product.languages ?? []).join(", ") || "n/a"}`,
    `Selling platforms: ${product.sellingPlatforms.join(", ") || "any"}`,
    "",
    "Customer-facing positioning:",
    `  Short description: ${product.shortDescription}`,
    "",
    "Internal notes (NOT to be quoted to customers — context only):",
    `  ${product.description}`,
  ];

  if (product.assetSummary && product.assetSummary.length > 0) {
    lines.push("", "Assets included in this kit:");
    for (const a of product.assetSummary) {
      const tag = a.attachedToPrompt ? " [ATTACHED PDF]" : "";
      lines.push(`  - ${a.name} (${a.type}${a.size ? `, ${a.size}` : ""})${tag}`);
    }
  }

  if (product.attachedPdfCount && product.attachedPdfCount > 0) {
    lines.push(
      "",
      `${product.attachedPdfCount} PDF file(s) attached. Read them as the primary source of truth about the product's actual content.`,
    );
  } else {
    lines.push(
      "",
      "No PDF attached. Generate the kit from the textual context above; stay grounded in the category and short description.",
    );
  }

  lines.push(
    "",
    "Generate the complete marketing kit now. Return strictly the requested JSON shape.",
  );

  return lines.join("\n");
}
