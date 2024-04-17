import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryRed: "hsl(0, 100%, 74%)",
        primaryGreen: "hsl(154, 59%, 51%)",
        accentBlue: "hsl(248, 32%, 49%)",
        neutralDarkBlue: "hsl(249, 10%, 26%)",
        neutralGrayishBlue: "hsl(246, 25%, 77%)",
      },
    },
  },
  plugins: [],
};
export default config;
