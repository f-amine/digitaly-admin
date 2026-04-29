import { Button as REButton } from "@react-email/components";

import { brand } from "../theme";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
};

export function Button({ href, children, variant = "primary" }: Props) {
  if (variant === "ghost") {
    return (
      <REButton
        href={href}
        style={{
          color: brand.ink,
          padding: "12px 22px",
          fontSize: 13,
          fontWeight: 700,
          textDecoration: "none",
          display: "inline-block",
          fontFamily: brand.fontStack,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          border: `1.5px solid ${brand.ink}`,
          borderRadius: brand.radius,
          backgroundColor: brand.cream,
        }}
      >
        {children} →
      </REButton>
    );
  }

  // Primary: chunky stamped sticker — black border + offset hard shadow
  return (
    <table role="presentation" cellPadding={0} cellSpacing={0} border={0}>
      <tbody>
        <tr>
          <td>
            <table
              role="presentation"
              cellPadding={0}
              cellSpacing={0}
              border={0}
              style={{ borderCollapse: "separate" }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: brand.primary,
                      border: `1.5px solid ${brand.ink}`,
                      boxShadow: `4px 4px 0 0 ${brand.ink}`,
                    }}
                  >
                    <REButton
                      href={href}
                      style={{
                        color: brand.primaryFg,
                        padding: "16px 30px",
                        fontSize: 14,
                        fontWeight: 700,
                        textDecoration: "none",
                        display: "inline-block",
                        fontFamily: brand.fontStack,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {children} ↗
                    </REButton>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
