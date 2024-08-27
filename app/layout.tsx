import { ReactNode } from "react";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";
import { description, keywords, title, url } from "@dcm/app/_site-config";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title,
  keywords,
  description,
  openGraph: {
    siteName: title,
    countryName: "Països Catalans",
    title,
    authors: ["Aina Delgado", "Ícar N. S."],
    url,
    description,
    locale: "ca",
    tags: keywords,
  },
  authors: [
    {
      name: "Aina Delgado",
      url: new URL("https://www.instagram.com/ainadelsol/"),
    },
    { name: "Ícar N. S.", url: new URL("https://icarns.xyz") },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ca">
      <body
        className={
          "bg-neutral-100 text-base text-bookBlue dark:bg-black dark:text-blue-200 " +
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
