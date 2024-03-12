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
        "base-100": "#F8F8F8",

        "base-content-100": "#020202",
        "base-content-200": "#46464B",
        "base-content-300": "#75767C",
        "base-content-primary": "#453AC4",
        primary: "#29FFB2",
        secondary: "#160C4A",

        "gray-1": "#E5E8EF",
      },
    },
  },
  plugins: [],
};
export default config;
