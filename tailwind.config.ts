import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 10px rgba(0, 200, 255, 0.7), 0 0 20px rgba(0, 200, 255, 0.5), 0 0 30px rgba(0, 200, 255, 0.3)",
      },
      clipPath: {
        pointed: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        streamer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        customBounce: {
          "0%, 100%": {
            transform: "translateX(-10%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0%" },
          "100%": { backgroundPosition: "-200% 0%" },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        shine: "shine 1.5s linear infinite",
        streamer: "streamer 3s linear infinite",
        gradientMove: "gradientMove 1s ease infinite",
        customBounce: "customBounce 1s infinite",
        shimmer: "shimmer 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
} satisfies Config;
