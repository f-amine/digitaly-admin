import "~/styles/globals.css";

import { type Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { Toaster } from "~/components/ui/sonner";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "KitsWand Admin",
  description: "KitsWand internal admin console.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="kw-font" suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            {children}
            <Toaster richColors position="top-right" />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
