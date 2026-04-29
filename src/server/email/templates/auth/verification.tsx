import { Section } from "@react-email/components";

import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { EmailLayout } from "../../components/EmailLayout";
import { Eyebrow } from "../../components/Eyebrow";
import { Heading } from "../../components/Heading";
import { HeroMark } from "../../components/HeroMark";
import { Paragraph } from "../../components/Paragraph";
import { brand } from "../../theme";

export const VERIFICATION_SUBJECT = "Verify Your KitsWand Admin Email";
const PREVIEW = "One click activates your admin access.";

type Props = {
  firstName?: string;
  verifyUrl: string;
};

export default function VerificationEmail({ firstName, verifyUrl }: Props) {
  return (
    <EmailLayout preview={PREVIEW} dispatch="ADMIN-VERIFY" serial="—">
      <HeroMark glyph="→" tone="ink" />
      <Eyebrow label="Action" number="Verify admin email" />
      <Heading>
        Verify your email{firstName ? `, ${firstName}` : ""}.
      </Heading>
      <Paragraph size="lg">
        One click activates your KitsWand admin account.
      </Paragraph>

      <Divider variant="double" />

      <Section style={{ padding: "6px 0 4px" }}>
        <Button href={verifyUrl}>Verify my email</Button>
      </Section>

      <Paragraph muted size="sm">
        If you didn&apos;t request this, ignore this email.
      </Paragraph>
      <Paragraph muted size="sm">
        <span
          style={{
            fontFamily: brand.monoStack,
            wordBreak: "break-all",
            color: brand.inkSoft,
          }}
        >
          {verifyUrl}
        </span>
      </Paragraph>
    </EmailLayout>
  );
}
