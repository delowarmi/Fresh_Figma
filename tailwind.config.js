/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins'],
        'top':['Tinos']
      },
      colors: {
        'BannerColor':'#FAE3B6',
        'BtnColor': '#FFD687',
        'BtnsColor': '#FDBB57',
        'fashionColor': '#FEECC8',
        'SellColor': '#CFA485',
      },
      backgroundImage: {
        'cort': "url('./src/assets/Cot1.png')",
        'cort2': "url('./src/assets/Cot2.png')",
        'cort3': "url('./src/assets/Cot3.png')",
      },
      maxWidth: {
        'mainContainer': '1420px',
      }

    },
  },
  plugins: [],
}

