/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {},
  //   // boxShadow: {
  //   //   gradient:
  //   //     "0 2px 4px rgba(225, 215, 245, 0.5), 0 4px 8px rgba(255, 0, 0, 0.4), 0 6px 12px rgba(0, 0, 255, 0.3), 0 8px 16px rgba(0, 225, 255, 0.3)",
  //   // },
    
  // },

 
  plugins: [
    require('daisyui'),
  ],
}

