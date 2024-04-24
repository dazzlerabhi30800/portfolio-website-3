/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        jersey: ["var(--font-jersey)"],
        anton: ["var(--font-anton)"],
        caveat: ["var(--font-caveat)"],
        pacifico: ["var(--font-pacifico)"],
        logo: ["var(--font-logo)"],
      },
      height: {
        screen2: "calc(100vh - 101.375px)",
      },
      keyframes: {
        bgChange: {
          "0%": { backgroundPosition: "0vh" },
          "50%": { backgroundPosition: "50vh" },
          "100%": { backgroundPosition: "100vh" },
        },
      },
      animation: {
        bgChange: "bgChange 10s linear infinite",
      },
    },
  },
  plugins: [],
};
