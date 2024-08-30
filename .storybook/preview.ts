/** @type { import('@storybook/web-components').Preview } */
import { defineCustomElements } from '../dist/esm/loader';

defineCustomElements();
import '../src/global/tailwind-output.css';

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
