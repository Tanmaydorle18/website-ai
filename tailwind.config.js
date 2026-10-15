/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF7',
          100: '#FFF9F0',
          200: '#FFF3E2',
          300: '#FFE8CD',
          400: '#FFDCB3',
        },
        chocolate: {
          DEFAULT: '#2C1A1D',
          dark: '#1C1012',
          light: '#4A3337',
          muted: '#6E5358',
        },
        strawberry: {
          DEFAULT: '#FF85A1',
          light: '#FFA6BC',
          dark: '#E76584',
          subtle: '#FFF0F3',
        },
        matcha: {
          DEFAULT: '#A8E6CF',
          light: '#C4F0E0',
          dark: '#76CFA8',
          subtle: '#F0FAF5',
        },
        glaze: {
          DEFAULT: '#C7CEEA',
          light: '#DFE4F7',
          dark: '#9FA9D8',
          subtle: '#F4F5FB',
        },
        caramel: {
          DEFAULT: '#EFA968',
          light: '#F8C89A',
          dark: '#D98A41',
          subtle: '#FFF7ED',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'dessert': '0 10px 30px -5px rgba(44, 26, 29, 0.08), 0 4px 6px -2px rgba(44, 26, 29, 0.04)',
        'dessert-hover': '0 20px 35px -5px rgba(255, 133, 161, 0.22), 0 10px 15px -3px rgba(44, 26, 29, 0.06)',
        'glaze': '0 0 25px rgba(199, 206, 234, 0.45)',
        'strawberry-glow': '0 0 25px rgba(255, 133, 161, 0.35)',
        'matcha-glow': '0 0 25px rgba(168, 230, 207, 0.4)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
