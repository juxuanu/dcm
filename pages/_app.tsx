import "@dcm/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";
import React from "react";
import Head from "next/head";
import Script from 'next/script';

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={raleway.className}>
      <Head>
        <title key={"title"}>Mallorquí per catalans</title>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="mallorquí, català, diccionari, expressions, curiositats"
        />
        <meta
          name="description"
          content="Mallorquí per catalans: expressions, paraules i curiositats."
        />
        <meta name="author" content="Ícar N. S. & Aina D. S." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/corito.png" />
        <Script src="https://statsy.observer/clr4qfo6e0026aj0twlas4gfk.js"></Script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
