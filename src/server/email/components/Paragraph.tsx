import { Text } from "@react-email/components";
import type { ReactNode } from "react";

import { brand } from "../theme";

type Props = {
  children: ReactNode;
  muted?: boolean;
  size?: "sm" | "md" | "lg";
};

export function Paragraph({ children, muted, size = "md" }: Props) {
  const sizes = {
    sm: { fontSize: 12, lineHeight: "20px", margin: "0 0 10px" },
    md: { fontSize: 15, lineHeight: "26px", margin: "0 0 14px" },
    lg: { fontSize: 17, lineHeight: "28px", margin: "0 0 18px" },
  } as const;
  const s = sizes[size];
  return (
    <Text
      style={{
        color: muted ? brand.muted : brand.inkSoft,
        fontSize: s.fontSize,
        lineHeight: s.lineHeight,
        margin: s.margin,
        fontFamily: brand.fontStack,
        fontWeight: 400,
      }}
    >
      {children}
    </Text>
  );
}
