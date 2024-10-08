import { ReactNode } from "react";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";
import {
  authors,
  description,
  keywords,
  title,
  url,
} from "@dcm/app/_site-config";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title,
  keywords,
  description,
  authors,
  openGraph: {
    siteName: title,
    countryName: "Països Catalans",
    title,
    authors: authors.map((author) => author.name),
    url,
    description,
    locale: "ca",
    tags: keywords,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ca">
      <body
        className={
          "scroll-smooth bg-neutral-100 text-base text-bookBlue antialiased dark:bg-black dark:text-blue-200 " +
          raleway.className
        }
      >
        <main className="mx-auto mb-12 mt-36 max-w-4xl px-4">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
