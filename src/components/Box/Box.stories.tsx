import type { Meta, StoryObj } from '@storybook/react'

import Box from './index'

const meta: Meta<typeof Box> = {
  title: 'Box',
  component: Box,
}

export default meta

type Story = StoryObj<typeof Box>

export const Default: Story = {
  args: {
    children: <p>Content here...</p>,
  },
}