import { Img } from "@react-email/components";

import { brand, dispatchSerial } from "../theme";

type Props = {
  dispatch?: string;
  serial?: string;
};

export function Header({ dispatch = "DISPATCH", serial }: Props) {
  const code = serial ?? dispatchSerial();
  return (
    <table
      role="presentation"
      cellPadding={0}
      cellSpacing={0}
      border={0}
      width="100%"
      style={{ borderCollapse: "collapse" }}
    >
      <tbody>
        <tr>
          <td style={{ verticalAlign: "middle", padding: "4px 0" }}>
            <Img
              src={brand.logoLight}
              alt={brand.name}
              width={132}
              height={28}
              style={{ display: "block" }}
            />
          </td>
          <td
            align="right"
            style={{
              verticalAlign: "middle",
              fontFamily: brand.monoStack,
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: brand.ink,
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "5px 9px",
                backgroundColor: brand.ink,
                color: brand.cream,
                fontWeight: 700,
              }}
            >
              {dispatch}
            </span>
            <span
              style={{
                display: "inline-block",
                padding: "5px 9px",
                border: `1px solid ${brand.ink}`,
                borderLeft: "none",
                color: brand.ink,
                fontWeight: 600,
              }}
            >
              №&nbsp;{code}
            </span>
          </td>
        </tr>
        <tr>
          <td colSpan={2} style={{ paddingTop: 14 }}>
            <div
              style={{
                height: 4,
                backgroundColor: brand.ink,
                lineHeight: "4px",
                fontSize: 0,
              }}
            />
            <div style={{ height: 2, lineHeight: "2px", fontSize: 0 }} />
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
      </tbody>
    </table>
  );
}
