/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "trans-right": {
          "0%, 100%": { transform: "translateX(10px)" },
          "50%": { transform: "translateX(0)" },
        },
        spinny: {
          from: { opacity: "0", transform: "translateY(-3rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "trans-up": {
          "25%": { transform: "translateX(-5rem)" },
          "50%": { transform: "translateY(-4rem)" },
          "75%": { transform: "translateX(5rem)" },
          "100%": { transform: "translateX(0rem)" },
        },
        scroll: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-50%)" },
        },
        scrollReverse: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      animation: {
        "trans-right": "trans-right 1.5s ease-in-out infinite",
        spinny: "spinny 0.7s ease-in-out 1",
        "trans-up": "trans-up 6s ease-in-out infinite",
        scroll: "scroll 15s linear infinite",
        "scroll-reverse": "scrollReverse 15s linear infinite",
      },
      colors: {
        textPrimary: "#E3DACC",
        primary: "#170f6e",
        secondary: "#1E3A8A",
      },
      fontFamily: {
        primary: ["Space_grotesk"],
      },
    },
  },
  plugins: [],
};
