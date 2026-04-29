import { Link, Text } from "@react-email/components";

import { brand } from "../theme";

export function Footer() {
  return (
    <table
      role="presentation"
      cellPadding={0}
      cellSpacing={0}
      border={0}
      width="100%"
      style={{ borderCollapse: "collapse", marginTop: 28 }}
    >
      <tbody>
        <tr>
          <td colSpan={2} style={{ paddingBottom: 14 }}>
            <div
              style={{
                height: 1,
                backgroundColor: brand.ink,
                lineHeight: "1px",
                fontSize: 0,
              }}
            />
          </td>
        </tr>
        <tr>
          <td style={{ verticalAlign: "top", paddingRight: 12 }}>
            <Text
              style={{
                margin: 0,
                fontFamily: brand.fontStack,
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: brand.ink,
              }}
            >
              Colophon
            </Text>
            <Text
              style={{
                margin: "8px 0 0",
                fontFamily: brand.fontStack,
                fontSize: 13,
                lineHeight: "20px",
                color: brand.inkSoft,
                fontStyle: "italic",
              }}
            >
              {brand.tagline}
            </Text>
          </td>
          <td
            align="right"
            style={{ verticalAlign: "top", paddingLeft: 12 }}
          >
            <Text
              style={{
                margin: 0,
                fontFamily: brand.fontStack,
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: brand.ink,
              }}
            >
              Correspondence
            </Text>
            <Text
              style={{
                margin: "8px 0 0",
                fontFamily: brand.fontStack,
                fontSize: 13,
                lineHeight: "20px",
                color: brand.inkSoft,
              }}
            >
              <Link
                href={`mailto:${brand.supportEmail}`}
                style={{
                  color: brand.primary,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {brand.supportEmail}
              </Link>
            </Text>
          </td>
        </tr>
        <tr>
          <td colSpan={2} style={{ paddingTop: 18 }}>
            <Text
              style={{
                margin: 0,
                fontFamily: brand.monoStack,
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: brand.muted,
              }}
            >
              <span style={{ color: brand.primary }}>●</span>&nbsp;&nbsp;
              {brand.legalAddress}&nbsp;&nbsp;·&nbsp;&nbsp;©{" "}
              {new Date().getFullYear()}&nbsp;&nbsp;·&nbsp;&nbsp;All rights
              reserved
            </Text>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
