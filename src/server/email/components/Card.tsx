import type { ReactNode } from "react";

import { brand } from "../theme";

type Props = {
  children: ReactNode;
  tone?: "neutral" | "accent" | "framed";
};

export function Card({ children, tone = "neutral" }: Props) {
  const styles =
    tone === "accent"
      ? {
          backgroundColor: brand.paperDeep,
          border: `1px solid ${brand.hairline}`,
        }
      : tone === "framed"
        ? {
            backgroundColor: brand.cream,
            border: `1.5px solid ${brand.ink}`,
            boxShadow: `3px 3px 0 0 ${brand.primary}`,
          }
        : {
            backgroundColor: brand.cream,
            border: `1px solid ${brand.hairline}`,
          };

  return (
    <table
      role="presentation"
      cellPadding={0}
      cellSpacing={0}
      border={0}
      width="100%"
      style={{ borderCollapse: "separate", margin: "18px 0" }}
    >
      <tbody>
        <tr>
          <td
            style={{
              ...styles,
              padding: "20px 22px",
            }}
          >
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
