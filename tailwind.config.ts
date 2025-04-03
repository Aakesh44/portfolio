import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Example for a custom min-width breakpoint
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        squarepeg: ["var(--font-square-peg)", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        bricolage: ["var(--font-bricolage-grotesque), sans-serif"],
      },

      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      animation: {
        zoom: 'zoom 2s infinite ease-in-out',
      },

    },
  },
  plugins: [],
} satisfies Config;
