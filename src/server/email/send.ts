import "server-only";

import type { ReactElement } from "react";

import { env } from "~/env";

import { resend } from "./client";
import { renderEmail } from "./render";
import { FROM_DEFAULT } from "./theme";

export type SendEmailInput = {
  to: string | string[];
  subject: string;
  react: ReactElement;
  tags?: { name: string; value: string }[];
  replyTo?: string;
};

export type SendEmailResult =
  | { ok: true; id: string }
  | { ok: false; error: unknown };

export async function sendEmail(
  input: SendEmailInput,
): Promise<SendEmailResult> {
  const { html, text } = await renderEmail(input.react);
  const from = env.EMAIL_FROM ?? FROM_DEFAULT;

  if (!resend) {
    console.log(
      `[email:dev] → ${Array.isArray(input.to) ? input.to.join(",") : input.to} | ${input.subject}`,
    );
    console.log(text.slice(0, 240));
    return { ok: true, id: "dev-no-send" };
  }

  try {
    const result = await resend.emails.send({
      from,
      to: input.to,
      subject: input.subject,
      html,
      text,
      tags: [
        { name: "repo", value: "digitaly-admin" },
        ...(input.tags ?? []),
      ],
      replyTo: input.replyTo,
    });

    if (result.error) {
      console.error("[email] resend error", result.error);
      return { ok: false, error: result.error };
    }
    return { ok: true, id: result.data?.id ?? "" };
  } catch (error) {
    console.error("[email] send threw", error);
    return { ok: false, error };
  }
}
