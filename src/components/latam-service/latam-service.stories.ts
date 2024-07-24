import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'latam-service',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    image: 'https://cdn3.iconfinder.com/data/icons/future-pack/64/049-pattern-recognition-structure-abstract-grid-256.png',
    name: 'Web Design',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi     porta gravida at eget. Fusce dapibus tellus.',
  },
};
