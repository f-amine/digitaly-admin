import { Section } from "@react-email/components";

import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { EmailLayout } from "../../components/EmailLayout";
import { Eyebrow } from "../../components/Eyebrow";
import { Heading } from "../../components/Heading";
import { HeroMark } from "../../components/HeroMark";
import { Paragraph } from "../../components/Paragraph";

export const PASSWORD_RESET_SUBJECT = "Reset Your KitsWand Admin Password";
const PREVIEW = "Reset your password to regain access.";

type Props = {
  firstName?: string;
  resetUrl: string;
};

export default function PasswordResetEmail({ firstName, resetUrl }: Props) {
  return (
    <EmailLayout preview={PREVIEW} dispatch="ADMIN-RESET" serial="—">
      <HeroMark glyph="◷" tone="ink" />
      <Eyebrow label="Security" number="Reset admin password" />
      <Heading>
        Reset your password{firstName ? `, ${firstName}` : ""}.
      </Heading>
      <Paragraph size="lg">
        New password key, one click away. Link works once and expires in{" "}
        <strong>60 minutes</strong>.
      </Paragraph>

      <Divider variant="dotted" />

      <Section style={{ padding: "6px 0 4px" }}>
        <Button href={resetUrl}>Reset my password</Button>
      </Section>

      <Paragraph muted size="sm">
        Didn&apos;t request this? Ignore — your account stays locked.
      </Paragraph>
    </EmailLayout>
  );
}
