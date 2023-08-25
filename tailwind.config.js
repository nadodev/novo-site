/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        height: {
            'customHeight' : 'calc(100vh - 112px)',
        }
      },
    },
    plugins: [],
  }
