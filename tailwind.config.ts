import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      backgroundImage: {
        "hero-pattern": "url('/imgs/background.png')",
        "glass-bg":
          "url('https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 200, 255, 0.7), 0 0 20px rgba(0, 200, 255, 0.5), 0 0 30px rgba(0, 200, 255, 0.3)",
        cardNeon:
          "0 0 70px rgba(0, 200, 255, 0.7), 0 0 100px rgba(255,41,117,0.8), 0 0 200px rgba(0, 200, 255, 0.3)",
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
        "bounce-rotate": {
          "0%": { transform: "translateY(50px) scale(1)" },
          "100%": { transform: "translateY(10px) scale(1.8) rotate(360deg)" },
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
        "bounce-rotate": "bounce-rotate 0.9s infinite alternate",
      },
    },
  },
  plugins: [
    require("tailwind-clip-path"),
    ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, { animationDelay: string }>
      ) => void;
    }) => {
      const animationDelayUtilities = {
        ".animation-delay-300": { animationDelay: "0.3s" },
        ".animation-delay-600": { animationDelay: "0.6s" },
      };
      addUtilities(animationDelayUtilities);
    },
  ],
} satisfies Config;
