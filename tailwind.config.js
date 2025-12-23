/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // todos os arquivos dentro de src
  ],
  safelist: [
    "text-pink-500",
    "text-blue-500",
    "text-orange-500",
    "text-purple-500",
    "text-red-500",
    "text-green-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
