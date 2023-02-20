import type { Meta, StoryObj } from '@storybook/react';

import SignupSuccess from './index';

const meta: Meta<typeof SignupSuccess> = {
  title: 'SignupSuccess',
  component: (args) => (
    <div style={{ width: '400px' }}>
      <SignupSuccess {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof SignupSuccess>;

export const Default: Story = {
  args: {},
};
