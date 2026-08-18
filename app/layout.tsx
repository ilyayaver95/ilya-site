import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/Spotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display face for headings only — geometric, tight, reads well at 4rem+.
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// Placeholder only — full SEO/OG metadata is a later step.
export const metadata: Metadata = {
  title: "Ilya Yaverbaum — AI/ML Engineer",
  description:
    "AI/ML Engineer in Tel Aviv building LLM systems with production ML discipline.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // The inline script below adds `js` before hydration; that mismatch is intentional.
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        {/*
         * Marks JS as present before first paint so `.reveal` elements can
         * start hidden. Without JS the class is never added and everything is
         * visible — the static export never ships blank sections.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="page-grid" aria-hidden="true" />
        <div className="page-noise" aria-hidden="true" />
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
