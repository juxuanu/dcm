import type { Config } from "tailwindcss";

export default {
  content: [
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bookBlue: "rgb(40, 53, 101)",
      },
    },
  },
  plugins: [],
} satisfies Config;
