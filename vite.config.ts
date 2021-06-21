import preact from '@preact/preset-vite';

const config = {
  jsx: {
    factory: 'h',
    fragment: 'Fragment',
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  plugins: [preact()],
};

export default config;
