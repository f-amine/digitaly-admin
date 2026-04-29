import "server-only";

import { env } from "~/env";

export const APP_URL = env.PARTNER_PORTAL_URL;

export const brand = {
  name: "KitsWand",
  tagline: "Your wand. Your empire.",

  primary: "#E8431A",
  primaryDeep: "#B82E0A",
  primaryFg: "#FFF8F2",
  ink: "#1A1208",
  inkSoft: "#3A2E22",
  paper: "#FAF6F0",
  paperDeep: "#F1EBE3",
  cream: "#FFFAF4",
  card: "#FFFFFF",
  hairline: "#E8DDD0",
  rule: "#1A1208",
  muted: "#7C6E5E",

  radius: "2px",
  radiusSoft: "8px",
  radiusPill: "999px",

  fontStack:
    '"Funnel Display","Inter","Helvetica Neue",Helvetica,Arial,sans-serif',
  serifStack:
    '"Iowan Old Style","Apple Garamond","Baskerville","Times New Roman",Times,serif',
  monoStack: '"JetBrains Mono","SF Mono",ui-monospace,Menlo,monospace',

  logoLight: `${APP_URL}/logos/logonav.svg`,
  logoDark: `${APP_URL}/logos/logonav_dark.svg`,
  supportEmail: "partners@kitswand.com",
  legalAddress: "KitsWand · A Digitaly Workshop",
  appUrl: APP_URL,
} as const;

export const FROM_DEFAULT = "KitsWand <noreply@kitswand.com>";

export function dispatchSerial(seed = "001") {
  const d = new Date();
  const yy = String(d.getFullYear()).slice(-2);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yy}${mm}${dd}-${seed}`;
}
