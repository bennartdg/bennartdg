import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "next-themes";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BENNART",
  description: "Bennart's greatest Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${notoSerif.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem={true}
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
