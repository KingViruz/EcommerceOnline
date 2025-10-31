
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {
    colors: {
        orange_primary: '#ff7800',
        orange_secondary: '#ff8904',
        gray: '#fafaf7'
    },
    backgroundColor: {
        orange_primary: '#ff7800',
        orange_secondary: '#ff8904',
        gray: '#fafaf7'
    }
  } },
  plugins: [],
};