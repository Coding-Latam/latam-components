import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'latam-testimonial',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    testimonial:
      'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.',
    image: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png',
    author: 'Coriss Ambady',
    area: 'Financial Analyst',
  },
};
