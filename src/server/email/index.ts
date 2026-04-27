import "server-only";

type ApprovedEmail = {
  to: string;
  fullName: string;
  couponCode: string;
  discountLabel: string;
  partnerSlug: string;
};

const PARTNER_PORTAL_URL =
  process.env.PARTNER_PORTAL_URL ?? "http://localhost:3002";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.EMAIL_FROM ?? "KitsWand <noreply@kitswand.com>";

function approvedHtml({
  fullName,
  couponCode,
  discountLabel,
  partnerSlug,
}: Omit<ApprovedEmail, "to">) {
  const referralUrl = `${PARTNER_PORTAL_URL}/r/${partnerSlug}`;
  const signupUrl = `${PARTNER_PORTAL_URL}/signup`;
  return `<!doctype html>
<html><body style="font-family:system-ui,sans-serif;max-width:560px;margin:24px auto;color:#111">
  <h1 style="margin:0 0 12px">You're in, ${fullName} 🎉</h1>
  <p>Welcome to the KitsWand Partner Program. Here are your details:</p>
  <table style="border-collapse:collapse;margin:16px 0">
    <tr><td style="padding:6px 12px;background:#f4f4f5;font-weight:600">Coupon code</td>
        <td style="padding:6px 12px;background:#f4f4f5"><code>${couponCode}</code> (${discountLabel})</td></tr>
    <tr><td style="padding:6px 12px;font-weight:600">Referral link</td>
        <td style="padding:6px 12px"><a href="${referralUrl}">${referralUrl}</a></td></tr>
  </table>
  <p>Set up your dashboard to start tracking clicks, redemptions and payouts:</p>
  <p><a href="${signupUrl}" style="display:inline-block;padding:10px 16px;background:#7c3aed;color:#fff;border-radius:8px;text-decoration:none">Create your partner account</a></p>
  <p style="color:#6b7280;font-size:12px">Sign up using the same email this was sent to (${"​"}).</p>
</body></html>`;
}

export async function sendApplicationApprovedEmail(input: ApprovedEmail) {
  const subject = "You're approved — KitsWand Partner Program";
  const html = approvedHtml(input);

  if (!RESEND_API_KEY) {
    console.log("[email:dev] →", input.to, subject);
    console.log(html);
    return { id: "dev-no-send" };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: input.to,
      subject,
      html,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend API error: ${res.status} ${await res.text()}`);
  }
  return (await res.json()) as { id: string };
}
