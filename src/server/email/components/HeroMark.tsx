import { brand } from "../theme";

type Props = {
  glyph?: string;
  tone?: "primary" | "ink";
};

// Big circular "wax-stamp" mark — drops a single bold focal point at the top of an email.
export function HeroMark({ glyph = "✦", tone = "primary" }: Props) {
  const bg = tone === "primary" ? brand.primary : brand.ink;
  const fg = tone === "primary" ? brand.primaryFg : brand.cream;
  return (
    <table
      role="presentation"
      cellPadding={0}
      cellSpacing={0}
      border={0}
      style={{ borderCollapse: "collapse", margin: "0 0 22px" }}
    >
      <tbody>
        <tr>
          <td
            align="center"
            valign="middle"
            width={64}
            height={64}
            style={{
              width: 64,
              height: 64,
              backgroundColor: bg,
              border: `1.5px solid ${brand.ink}`,
              borderRadius: "50%",
              color: fg,
              fontFamily: brand.fontStack,
              fontSize: 28,
              fontWeight: 700,
              lineHeight: "64px",
              textAlign: "center",
            }}
          >
            {glyph}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
