import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        white: "0px 0px 8px rgba(255, 255, 255, 1)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        сharcoalBlue: "var(--сharcoalBlue)",
        goldenYellow: "var(--goldenYellow)",
        сosmicLatte: "var(--сosmicLatte)",
        сharlestonGreen: "var(--сharlestonGreen)",
        magnolia: "var(--magnolia)",
        linen: "var(--linen)",
        whiteSmoke: "var(--whiteSmoke)",
        сharcoal: "var(--сharcoal)",
        dark: "var(--dark)",
      },
      maxWidth: {
        1440: "1440px",
      },
      height: {
        90: "90%",
        600: "600px",
        300: "300px",
      },
      borderRadius: {
        "5xl": "50px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".text-shadow-white": {
          "text-shadow": "0px 0px 8px rgba(255, 255, 255, 1)",
        },
      });
    },
  ],
};
export default config;
