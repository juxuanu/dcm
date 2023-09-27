import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ca">
      <Head />
      <body className="text-bookBlue bg-neutral-100 dark:bg-black dark:text-blue-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
