import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Preview,
} from "@react-email/components";
import type { ReactNode } from "react";

import { brand } from "../theme";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  preview: string;
  children: ReactNode;
  serial?: string;
  dispatch?: string;
};

export function EmailLayout({ preview, children, serial, dispatch }: Props) {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <Font
          fontFamily="Funnel Display"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/funneldisplay/v2/B50WF7FGEMxnpaaP9NL3aSnj-jp_4HcNvBJD3o0u-w.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Funnel Display"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.gstatic.com/s/funneldisplay/v2/B50WF7FGEMxnpaaP9NL3eyfo-jp_4HcNvBJD3o0u-w.woff2",
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: brand.paper,
          fontFamily: brand.fontStack,
          margin: 0,
          padding: 0,
          color: brand.ink,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {/* Outer wrap with subtle ruled-paper feel */}
        <Container
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "32px 16px 48px",
          }}
        >
          <Header dispatch={dispatch} serial={serial} />

          {/* Framed body — black hairline + offset orange shadow = "stamped" feel */}
          <table
            role="presentation"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            width="100%"
            style={{
              borderCollapse: "separate",
              marginTop: 18,
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    backgroundColor: brand.card,
                    border: `1.5px solid ${brand.ink}`,
                    boxShadow: `6px 6px 0 0 ${brand.primary}`,
                    padding: "44px 40px 36px",
                  }}
                >
                  {children}
                </td>
              </tr>
            </tbody>
          </table>

          <Footer />
        </Container>
      </Body>
    </Html>
  );
}
