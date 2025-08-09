/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f8ff',
          100: '#e0f2fe',
          200: '#c7e6fd',
          300: '#a5d3fc',
          400: '#7bb8f9',
          500: '#4a9cf5',
          600: '#2080f0', // Light sky blue accent
          700: '#0d6edb',
          800: '#0056b3',
          900: '#002055', // Main dark blue primary
          950: '#001a44',
        },
        accent: {
          50: '#f0f8ff',
          100: '#e0f2fe',
          200: '#c7e6fd',
          300: '#a5d3fc',
          400: '#7bb8f9',
          500: '#4a9cf5',
          600: '#2080f0', // Light sky blue
          700: '#0d6edb',
          800: '#0056b3',
          900: '#004494',
          950: '#003275',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // True/Correct
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444', // False/Incorrect
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        warning: {
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Misleading
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        'arabic': ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
