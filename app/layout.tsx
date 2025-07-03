import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import type { ReactNode } from "react";
import "../styles/globals.css";
import {
  url,
  authors,
  description,
  keywords,
  title,
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
    images: `${url}/llibret1.jpeg`,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ca">
      <body
        className={`text-book-blue scroll-smooth bg-neutral-100 text-base antialiased dark:bg-black dark:text-blue-200 ${raleway.className}`}
      >
        <main className="mx-auto mt-36 mb-12 max-w-4xl px-4">{children}</main>
      </body>
    </html>
  );
}
