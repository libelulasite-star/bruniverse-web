import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "BRUNIVERSE Consulting",
  description: "Assessoria integrada a jogadores de futebol.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
