import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  component: 'latam-button',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    href: 'google.com',
    label: 'Button',
  },
};

export const CustomStyles: Story = {
  args: {
    href: 'google.com',
    label: 'Button',
    customStyles: 'justify-self-center',
  },
};
