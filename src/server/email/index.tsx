import "server-only";

import { env } from "~/env";

import { sendEmail } from "./send";
import PasswordResetEmail, {
  PASSWORD_RESET_SUBJECT,
} from "./templates/auth/password-reset";
import VerificationEmail, {
  VERIFICATION_SUBJECT,
} from "./templates/auth/verification";
import ApplicationApprovedEmail, {
  APPLICATION_APPROVED_SUBJECT,
} from "./templates/partner/application-approved";

type ApprovedEmail = {
  to: string;
  fullName: string;
  couponCode: string;
  discountLabel: string;
  partnerSlug: string;
};

export async function sendApplicationApprovedEmail(input: ApprovedEmail) {
  const portal = env.PARTNER_PORTAL_URL;
  const referralUrl = `${portal}/r/${input.partnerSlug}`;
  const signupUrl = `${portal}/signup`;

  const result = await sendEmail({
    to: input.to,
    subject: APPLICATION_APPROVED_SUBJECT,
    react: (
      <ApplicationApprovedEmail
        fullName={input.fullName}
        couponCode={input.couponCode}
        discountLabel={input.discountLabel}
        referralUrl={referralUrl}
        signupUrl={signupUrl}
      />
    ),
    tags: [{ name: "category", value: "application-approved" }],
  });

  if (!result.ok) {
    throw new Error(
      typeof result.error === "string"
        ? result.error
        : "Failed to send approval email",
    );
  }
  return { id: result.id };
}

export const sendVerificationEmail = (args: {
  to: string;
  firstName?: string;
  verifyUrl: string;
}) =>
  sendEmail({
    to: args.to,
    subject: VERIFICATION_SUBJECT,
    react: (
      <VerificationEmail
        firstName={args.firstName}
        verifyUrl={args.verifyUrl}
      />
    ),
    tags: [{ name: "category", value: "verification" }],
  });

export const sendPasswordResetEmail = (args: {
  to: string;
  firstName?: string;
  resetUrl: string;
}) =>
  sendEmail({
    to: args.to,
    subject: PASSWORD_RESET_SUBJECT,
    react: (
      <PasswordResetEmail
        firstName={args.firstName}
        resetUrl={args.resetUrl}
      />
    ),
    tags: [{ name: "category", value: "password-reset" }],
  });
