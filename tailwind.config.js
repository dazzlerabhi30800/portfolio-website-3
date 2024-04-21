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
      },
      height: {
        screen2: "calc(100vh - 116px)",
      },
    },
  },
  plugins: [],
};
