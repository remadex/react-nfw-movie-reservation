/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      minHeight: {
        96: '24rem',
      },
      colors: {
        background: '#F9F9F9',
      },
    },
  },
  variants: {
    extend: {},
  },
};
