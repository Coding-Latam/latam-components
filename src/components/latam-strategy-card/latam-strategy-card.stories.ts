import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'latam-strategy-card',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    order: '1',
    name: 'Brainstorming Session',
    description: 'Brainstorming Session',
  },
};
