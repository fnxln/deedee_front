/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
// daisyUI config (optional)
daisyui: {
  styled: true,
  themes: true,
  base: true,
  utils: true,
  logs: true,
  rtl: false,
  prefix: "",
  themes: ["acid","business"],
  darkTheme: "business",
  lightTheme: "acid",
},
}
