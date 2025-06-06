/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FBE4D6',
        primary: {
          DEFAULT: '#261FB3',
          dark: '#161179',
          darker: '#0C0950',
        },
        secondary: {
          DEFAULT: '#2A2A72',
          light: '#4040B2',
        },
        accent: {
          DEFAULT: '#F4A261',
          light: '#F8C291',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#A7F3D0',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FDE68A',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#FCA5A5',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};