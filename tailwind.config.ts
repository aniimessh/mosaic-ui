import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/imgs/background.png')",
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 200, 255, 0.7), 0 0 20px rgba(0, 200, 255, 0.5), 0 0 30px rgba(0, 200, 255, 0.3)",
      },
      clipPath: {
        pointed: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neonbg: "#D2FF72",
      },
      keyframes: {
        circular: {
          "0%": { backgroundPosition: "100% 0" },
          "25%": { backgroundPosition: "100% 100%" },
          "50%": { backgroundPosition: "0 100%" },
          "75%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "25%": { backgroundPosition: "200% 200%" },
          "50%": { backgroundPosition: "0 200%" },
          "75%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "200% 0" },
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
        breathing: {
          "0%": { backgroundPosition: "200% 0%" },
          "100%": { backgroundPosition: "-200% 0%" },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        glitch: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-3px)" },
          "40%": { transform: "translateX(3px)" },
          "60%": { transform: "translateX(-3px)" },
          "80%": { transform: "translateX(3px)" },
        },
        slideIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        shine: "shine 1.5s linear infinite",
        streamer: "streamer 3s linear infinite",
        gradientMove: "gradientMove 1s ease infinite",
        customBounce: "customBounce 1s infinite",
        breathing: "breathing 5s linear infinite",
        glitch: "glitch 1s infinite",
        circular: "circular 4s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        slideIn: "slideIn 0.3s both",
        slideOut: "slideOut 0.3s ease-in",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
} satisfies Config;
