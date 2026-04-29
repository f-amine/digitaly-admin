import { brand } from "../theme";

type Props = {
  variant?: "solid" | "double" | "dotted";
};

export function Divider({ variant = "solid" }: Props) {
  if (variant === "double") {
    return (
      <div style={{ margin: "22px 0" }}>
        <div
          style={{
            height: 1,
            backgroundColor: brand.ink,
            lineHeight: "1px",
            fontSize: 0,
          }}
        />
        <div style={{ height: 3, lineHeight: "3px", fontSize: 0 }} />
        <div
          style={{
            height: 1,
            backgroundColor: brand.ink,
            lineHeight: "1px",
            fontSize: 0,
          }}
        />
      </div>
    );
  }
  if (variant === "dotted") {
    return (
      <div
        style={{
          margin: "22px 0",
          fontFamily: brand.monoStack,
          color: brand.muted,
          fontSize: 12,
          letterSpacing: "0.4em",
          textAlign: "center",
        }}
      >
        · · · · · · · · · · · ·
      </div>
    );
  }
  return (
    <div
      style={{
        height: 1,
        margin: "22px 0",
        backgroundColor: brand.hairline,
        lineHeight: "1px",
        fontSize: 0,
      }}
    />
  );
}
