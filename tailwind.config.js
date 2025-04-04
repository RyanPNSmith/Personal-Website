/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E5631', // Dark green
          light: '#2E7D32',   // Medium green
          dark: '#0F401A',    // Deeper green
        },
        secondary: {
          DEFAULT: '#9E9E9E', // Medium gray
          light: '#E0E0E0',   // Light gray
          dark: '#757575',    // Dark gray
        },
        background: {
          primary: '#F5F5F5', // Very light gray
          secondary: '#EEEEEE', // Light gray background
          tertiary: '#E0E0E0', // Medium light gray background
          dark: '#1A3728',    // Dark green background
        },
        text: {
          primary: '#212121', // Nearly black
          secondary: '#424242', // Dark gray text
          light: '#FAFAFA',   // Very light gray, nearly white
        },
        border: {
          DEFAULT: '#BDBDBD', // Medium gray border
          dark: '#2E7D32',    // Green border
        },
      },
    },
  },
  plugins: [],
} 