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
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        secondary: {
          DEFAULT: '#64748b',
          light: '#94a3b8',
          dark: '#475569',
        },
        background: {
          primary: '#ffffff',
          secondary: '#f8fafc',
          tertiary: '#f1f5f9',
          dark: '#0f172a',
        },
        text: {
          primary: '#1e293b',
          secondary: '#475569',
          light: '#f8fafc',
        },
        border: {
          DEFAULT: '#e2e8f0',
          dark: '#cbd5e1',
        },
      },
    },
  },
  plugins: [],
} 