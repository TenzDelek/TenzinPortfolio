/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'tenzingrey': '#61677A',
        'tenzingreydark': '#272829',
      },
    },
  },
  theme:{
    extend:{
      animation:{
        'tenzin':'move 1s infinite ease-in-out alternate',
      },
      keyframes:{
        move:{
          '0%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(15px) ' },
        }
      },
      colors:{
        insta:"#E4405F",
        linkedin:"#0A66C2",
        git:"#EA4C89"
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
