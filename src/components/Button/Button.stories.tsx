import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: (args) => (
    <div style={{ width: '300px' }}>
      <Button {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Signup',
    variant: 'primary',
  },
};
export const Secondary: Story = {
  args: {
    children: 'Signup',
    variant: 'secondary',
  },
};
