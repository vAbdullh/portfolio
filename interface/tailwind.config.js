/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ['Russo One', 'sans-serif'],
        pixel: ['"Pixelify Sans"', 'sans-serif'],
      },
      colors: {
        'primary': '#483D8B',
        'mint-white': '#f5fffa',
        'light-black': '#16161b',
        'black1': '#16161b',
        'black2': '#1314167e',
      },
      gridTemplateColumns: {
        'home-sm': 'repeat(2, 150px)',
        'home-md': 'repeat(3, 150px)',
        'home-lg': 'repeat(6, 200px)',
      },
      gridAutoRows: {
        'home': '150px',
        'home-lg': '200px',
      },
      borderRadius: {
        '10': '10px',
      },
      animation: {
        flip: "flip 10s infinite steps(2, end)",
        rotate: "rotate 5s linear infinite both",
      },
      keyframes: {
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
      },
      boxShadow: {
        card: '0px 0px 99px 190px #f5fffa, 500px 50px 0px 1000px #f5fffa inset',
      },
    },
  },

  plugins: [

  ],
}
