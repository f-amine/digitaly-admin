import { Heading as REHeading } from "@react-email/components";
import type { ReactNode } from "react";

import { brand } from "../theme";

type Props = {
  children: ReactNode;
  level?: 1 | 2 | 3;
};

const sizes = {
  1: { fontSize: 38, lineHeight: "42px", marginBottom: 14, weight: 700, ls: "-0.025em" },
  2: { fontSize: 26, lineHeight: "30px", marginBottom: 10, weight: 700, ls: "-0.018em" },
  3: { fontSize: 18, lineHeight: "24px", marginBottom: 8, weight: 700, ls: "-0.01em" },
} as const;

export function Heading({ children, level = 1 }: Props) {
  const s = sizes[level];
  return (
    <REHeading
      as={`h${level}`}
      style={{
        color: brand.ink,
        fontFamily: brand.fontStack,
        fontWeight: s.weight,
        margin: `0 0 ${s.marginBottom}px`,
        fontSize: s.fontSize,
        lineHeight: s.lineHeight,
        letterSpacing: s.ls,
      }}
    >
      {children}
    </REHeading>
  );
}
