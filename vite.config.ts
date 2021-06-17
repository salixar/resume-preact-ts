import preact from '@preact/preset-vite';

const config = {
  jsx: {
    factory: 'h',
    fragment: 'Fragment',
  },
  plugins: [preact()],
};

export default config;
