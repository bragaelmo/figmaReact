import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['ABeeZee', 'Rubik', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bgLogin': "url('/assets/img/bg-login.png')",
        'bgContent': "url('/assets/img/bg-content.svg')",
        'gradientBox': 'linear-gradient(180deg, rgba(38,50,56,1) 0%, rgba(35,39,49,0) 100%)',
        'gradientSmallBox': 'linear-gradient(119.15deg, #263238 -13.54%, #292F3C 118.09%)',
        'buttonBg': 'url("/assets/img/button-bg.svg")',
        'inputBg': 'url("/assets/img/bg-input.svg")'
      },
      height: {
        'fill': '-webkit-fill-available',
      },
      colors: {
        "textPrimary": "#FFFFFF",
        "textSecondary": "#A0AEC0",
        "backgroundPrimary": "#2B2E37",
        "backgroundSecondary": "#22262F",
        "bgGreen": "#077E71",
        "textGreen": "#11BCA9",
        "bgCards": "#414C644D",
        "danger": "#631C06"
      },
      border: {
        "test": "1px solid"
      },
      fontFamily: {
        'raleway': ['Raleway', 'san-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'abeezee': ['ABeeZee', 'sans-serif']
      }
    },

  },
  plugins: [],
}
export default config
