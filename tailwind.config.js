const withOpacity = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }

    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        ink: {
          50: withOpacity("--ink-50"),
          100: withOpacity("--ink-100"),
          200: withOpacity("--ink-200"),
          300: withOpacity("--ink-300"),
          400: withOpacity("--ink-400"),
          500: withOpacity("--ink-500"),
          600: withOpacity("--ink-600"),
          700: withOpacity("--ink-700"),
          800: withOpacity("--ink-800"),
          900: withOpacity("--ink-900"),
          950: withOpacity("--ink-950"),
        },
        surface: {
          50: withOpacity("--surface-50"),
          100: withOpacity("--surface-100"),
          200: withOpacity("--surface-200"),
          800: withOpacity("--surface-800"),
          850: withOpacity("--surface-850"),
          900: withOpacity("--surface-900"),
          950: withOpacity("--surface-950"),
        },
        accent: {
          cyan: withOpacity("--accent-cyan"),
          blue: withOpacity("--accent-blue"),
          violet: withOpacity("--accent-violet"),
          amber: withOpacity("--accent-amber"),
          rose: withOpacity("--accent-rose"),
          contrast: "#030507",
        },
        "accent-cyan": withOpacity("--accent-cyan"),
        "accent-blue": withOpacity("--accent-blue"),
        "accent-violet": withOpacity("--accent-violet"),
        "accent-amber": withOpacity("--accent-amber"),
        "accent-rose": withOpacity("--accent-rose"),
        "accent-contrast": "#030507",
        parentDark: withOpacity("--surface-950"),
        success: withOpacity("--success"),
        warning: withOpacity("--warning"),
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "Space Grotesk",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
      backgroundImage: {
        "hero-radial": "var(--hero-radial)",
        "panel-gradient": "var(--panel-gradient)",
        "accent-gradient": "var(--accent-gradient)",
        "warm-gradient": "var(--warm-gradient)",
        "grid-lines": "var(--grid-lines)",
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        "glow-violet": "var(--shadow-glow-violet)",
        panel: "var(--shadow-panel)",
        "soft-ring": "var(--shadow-soft-ring)",
      },
      borderRadius: {
        panel: "1.25rem",
        control: "0.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        reveal: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.42" },
          "50%": { opacity: "0.85" },
        },
        introExit: {
          "0%, 76%": { opacity: "1", transform: "scale(1)" },
          "100%": {
            opacity: "0",
            transform: "scale(1.025)",
            visibility: "hidden",
          },
        },
        loaderMark: {
          "0%": { opacity: "0", transform: "scale(0.86) rotate(-8deg)" },
          "45%": { opacity: "1", transform: "scale(1.04) rotate(2deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
        loaderBar: {
          "0%": { transform: "translateX(-102%)" },
          "62%, 100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        reveal: "reveal 700ms ease-out both",
        marquee: "marquee 24s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "intro-exit": "introExit 1.9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
        "loader-mark": "loaderMark 720ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "loader-bar": "loaderBar 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) both",
      },
    },
  },
  plugins: [],
};
