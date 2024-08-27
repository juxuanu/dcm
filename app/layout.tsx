import { ReactNode } from "react";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mallorquí per catalans",
  keywords: ["mallorquí", "català", "expressions", "curiositats"],
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
