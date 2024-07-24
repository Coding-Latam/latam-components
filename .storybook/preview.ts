/** @type { import('@storybook/web-components').Preview } */
import { defineCustomElements } from '../dist/esm/loader';

defineCustomElements();
import '../src/styles/tailwind.css';
// import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

const preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
