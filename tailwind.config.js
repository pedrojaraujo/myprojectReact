/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SourceCodePro: "'Source Code Pro', serif",
        Dongle: "Dongle, serif",
        Kalam: "Kalam, serif",
        InstrumentSerif: "'Instrument Serif', serif"
      }
    },
  },
  plugins: [],
}
