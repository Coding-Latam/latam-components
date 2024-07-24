import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'latam-faq',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    question: 'How do I get my subscription receipt?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sed blanditiis aut hic iusto laborum corporis, accusantium illum vel dicta temporibus animi ipsum quam quidem rerum voluptatibus nihil id asperiores!',
  },
};
