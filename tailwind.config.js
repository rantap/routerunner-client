/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      keyframes: {
        fade: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        zoom: {
          from: {
            transform: 'scale(0.8)',
          },
          to: {
            transform: 'scale(1)',
          },
        },
        slide: {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        blur: {
          from: {
            background: 'rgba(45 0 0 / 0)',
            'backdrop-filter': 'blur(0)',
          },
          to: {
            background: 'rgba(0 0 0 / .5)',
            'backdrop-filter': 'blur(8px)',
          },
        },
      },
      animation: {
        zoom: 'zoom 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'fade-in': 'fade 200ms',
        'fade-out': 'fade 200ms reverse ease-in',
        'slide-in': 'slide 300ms',
        'slide-out': 'slide 300ms reverse ease-in',
        'blur-in': 'blur 300ms',
        'blur-out': 'blur 300ms reverse ease-in',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
