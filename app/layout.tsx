import { ReactNode } from "react";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mallorquí per catalans",
  keywords: ["mallorquí", "català", "diccionari", "expressions", "curiositats"],
  description: "Mallorquí per catalans: expressions, paraules i curiositats.",
  authors: [
    {
      name: "Aina Delgado",
      url: new URL("https://www.instagram.com/ainadelsol/"),
    },
    { name: "Ícar Nin", url: new URL("https://icarns.xyz") },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ca">
      <body
        className={
          "text-bookBlue bg-neutral-100 dark:bg-black dark:text-blue-200 text-base " +
          raleway.className
        }
      >
        <main className="px-4 mb-12 max-w-4xl mx-auto mt-36">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
