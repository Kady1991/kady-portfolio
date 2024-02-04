/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        brightColor: "#BA55D3",
        backgroundColor: "#F0F0F6",
        killsColor:"#D8BFD8",
        boutonBase:"#4B0082",
        hoverNav:"#fff50f5"
        
      },
    },
    plugins: [],
  }

}