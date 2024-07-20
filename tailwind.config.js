/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {  
        CustomDarkGrey: {
          1: "#424242",
          2: "#2C2A2A",
          3: "#3C3C3C",
          4: "#414141",
          5: "#373737"
        },
        CustomBlack: {
          1: "#252525",
          2: "#202020",
          3: "#131313"
        },
        CustomWhite: {
          1: "#FFFFFF",
          2: "#EDEDED",
          3: "#F2F2F2",
          4: "#FAFAFA"
        },
        CustomYellow: {
          1: "#F9ED32",
          2: "#FFF225"
        },
      },
      animation: {
        'text': 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
