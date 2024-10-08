import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { DataProvider } from "@/context/ContextApi";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "BBBenchmark",
  description: "but Better Benchmark.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html className={manrope.className} lang="en" suppressHydrationWarning>
        <head />
        <body>
          <DataProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </DataProvider>
        </body>
      </html>
    </>
  );
}
