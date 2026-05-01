import "server-only";

import { createGoogleGenerativeAI } from "@ai-sdk/google";

import { env } from "~/env";

const provider = createGoogleGenerativeAI({
  apiKey: env.GEMINI_API_KEY ?? "",
});

export const geminiText = provider(env.GEMINI_TEXT_MODEL);

export function isGeminiTextConfigured(): boolean {
  return !!env.GEMINI_API_KEY;
}
