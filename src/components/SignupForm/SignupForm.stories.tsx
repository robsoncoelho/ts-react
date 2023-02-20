import type { Meta, StoryObj } from '@storybook/react';

import SignupForm from './index';

const meta: Meta<typeof SignupForm> = {
  title: 'SignupForm',
  component: (args) => (
    <div style={{ width: '400px' }}>
      <SignupForm {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {
  args: {},
};
