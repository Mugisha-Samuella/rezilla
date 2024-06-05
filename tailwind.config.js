/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    screens: {
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontSize:{
        sm:'12px',
        xl: '1440px',
        lg: '20px',

      },
     colors:{
        vuejs: {
          100: "#49e659",
          932: "#434252",
        }
    },
  },
  },
  plugins: [],
}

