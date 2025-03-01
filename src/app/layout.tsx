// Next.js
import type { Metadata } from "next";
import { Inter,Kanit } from "next/font/google";

// Global css
import "./globals.css";

// Theme Provider
import { ThemeProvider } from "next-themes";

// Fonts
const interFont = Inter({ subsets: ["latin"] });
const kanitFont = Kanit({
  subsets:["latin"],
  weight:["400", "500"],
  variable: "--font-kanit",
 });

// Matadata

export const metadata: Metadata = {
  title: "Etax-Main",
  description: "Welcome to Etax Main Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} ${kanitFont.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
