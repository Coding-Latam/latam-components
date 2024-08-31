import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'latam-team',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    image: 'https://res.cloudinary.com/dwyvfa5dj/image/upload/v1724290244/images/team/te1_srxivw.jpg',
    area: 'UX/UI Designer',
    slogan: 'Designing seamless user experiences that inspire.',
    name: 'Michael Reyes',
  },
};
