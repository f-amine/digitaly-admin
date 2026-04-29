import { brand } from "../theme";

type Props = {
  label: string;
  number?: string;
};

export function Eyebrow({ label, number }: Props) {
  return (
    <div
      style={{
        marginBottom: 18,
        fontFamily: brand.monoStack,
        fontSize: 10,
        letterSpacing: "0.24em",
        textTransform: "uppercase",
        fontWeight: 700,
        color: brand.ink,
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "4px 8px",
          backgroundColor: brand.primary,
          color: brand.primaryFg,
          marginRight: 8,
        }}
      >
        {label}
      </span>
      {number && (
        <span style={{ color: brand.muted, fontWeight: 600 }}>
          № {number}
        </span>
      )}
    </div>
  );
}
