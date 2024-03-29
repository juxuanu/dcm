import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bookBlue: "rgb(40, 53, 101)",
      },
    },
  },
  plugins: [],
} satisfies Config;
