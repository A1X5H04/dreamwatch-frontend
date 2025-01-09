import type { Config } from "tailwindcss";
import DaisyUI from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grape: "rgba(var(--grape))",
      },
    },
  },
  plugins: [DaisyUI],
} satisfies Config;
