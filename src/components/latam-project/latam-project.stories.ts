import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'latam-project',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    image: 'https://res.cloudinary.com/dwyvfa5dj/image/upload/v1724290242/images/projects/project1_kwycbw.jpg',
    name: 'Fitness Tracker App',
    category: 'Mobile Development',
  },
};
