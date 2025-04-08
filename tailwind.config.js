/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Inter', 'monospace'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C3E50', // Deep winter blue
          light: '#34495E',   // Medium navy blue
          dark: '#1A2530',    // Darker blue
        },
        secondary: {
          DEFAULT: '#B3C6D1', // Icy blue/silver
          light: '#D6E4EA',   // Light ice blue
          dark: '#829DAD',    // Deeper icy blue
        },
        background: {
          primary: '#F5F9FC', // Snow white/very light blue
          secondary: '#ECF4F9', // Light blue-white
          tertiary: '#D1E0EB', // Ice blue background
          dark: '#20313F',    // Deep winter night blue
        },
        text: {
          primary: '#1F2937', // Dark slate
          secondary: '#4B5563', // Medium slate gray
          light: '#FFFFFF',   // Pure white
        },
        border: {
          DEFAULT: '#B3C6D1', // Icy blue border
          dark: '#2C3E50',    // Deep blue border
        },
      },
    },
  },
  plugins: [],
} 