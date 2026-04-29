import { Section } from "@react-email/components";

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Divider } from "../../components/Divider";
import { EmailLayout } from "../../components/EmailLayout";
import { Eyebrow } from "../../components/Eyebrow";
import { Heading } from "../../components/Heading";
import { HeroMark } from "../../components/HeroMark";
import { Paragraph } from "../../components/Paragraph";
import { brand } from "../../theme";

export const APPLICATION_APPROVED_SUBJECT =
  "You're approved — KitsWand Partner Program";
const PREVIEW = "You're in. Coupon, link, dashboard — all yours.";

type Props = {
  fullName: string;
  couponCode: string;
  discountLabel: string;
  referralUrl: string;
  signupUrl: string;
};

export default function ApplicationApprovedEmail({
  fullName,
  couponCode,
  discountLabel,
  referralUrl,
  signupUrl,
}: Props) {
  return (
    <EmailLayout preview={PREVIEW} dispatch="APPROVED" serial="PARTNER">
      <HeroMark glyph="✦" />
      <Eyebrow label="Approved" number="Partner program" />
      <Heading>
        You&apos;re in,<br />
        <span style={{ color: brand.primary }}>{fullName}.</span>
      </Heading>
      <Paragraph size="lg">
        Welcome to the KitsWand Partner Program. Below: your coupon, your
        link, and the keys to your ledger.
      </Paragraph>

      <Card tone="framed">
        <div
          style={{
            fontFamily: brand.monoStack,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: brand.muted,
            marginBottom: 6,
          }}
        >
          Coupon code
        </div>
        <div
          style={{
            fontFamily: brand.monoStack,
            fontSize: 24,
            fontWeight: 700,
            color: brand.ink,
            letterSpacing: "0.08em",
            marginBottom: 4,
          }}
        >
          {couponCode}
        </div>
        <div
          style={{
            fontFamily: brand.fontStack,
            fontSize: 13,
            color: brand.primary,
            fontWeight: 600,
          }}
        >
          {discountLabel}
        </div>

        <div
          style={{
            height: 1,
            backgroundColor: brand.hairline,
            margin: "16px 0",
            lineHeight: "1px",
            fontSize: 0,
          }}
        />

        <div
          style={{
            fontFamily: brand.monoStack,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: brand.muted,
            marginBottom: 6,
          }}
        >
          Referral link
        </div>
        <a
          href={referralUrl}
          style={{
            fontFamily: brand.monoStack,
            fontSize: 13,
            color: brand.primary,
            wordBreak: "break-all",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          {referralUrl}
        </a>
      </Card>

      <Paragraph>
        Set up your dashboard to start tracking clicks, redemptions and
        payouts.
      </Paragraph>

      <Divider variant="dotted" />

      <Section style={{ padding: "6px 0 4px" }}>
        <Button href={signupUrl}>Create your partner account</Button>
      </Section>

      <Paragraph muted size="sm">
        Sign up using the same email this was sent to.
      </Paragraph>
    </EmailLayout>
  );
}
