import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    alwaysVisible: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tooltipText: 'This is a tooltip',
    children: <span className="rounded bg-gray-200 px-4 py-2">Hover me</span>
  }
}

export const CustomColors: Story = {
  args: {
    tooltipText: 'Custom Tooltip',
    backgroundColor: 'bg-blue-500',
    textColor: 'text-white',
    children: <span className="rounded bg-gray-200 px-4 py-2">Hover me</span>
  }
}

export const AlwaysVisible: Story = {
  args: {
    tooltipText: 'Always Visible Tooltip',
    alwaysVisible: true,
    children: <span className="rounded bg-gray-200 px-4 py-2">Info</span>
  }
}

export const DifferentPositions: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-4">
      <Tooltip {...args} position="top">
        <span className="rounded bg-gray-200 px-4 py-2">Top</span>
      </Tooltip>
      <Tooltip {...args} position="bottom">
        <span className="rounded bg-gray-200 px-4 py-2">Bottom</span>
      </Tooltip>
      <Tooltip {...args} position="left">
        <span className="rounded bg-gray-200 px-4 py-2">Left</span>
      </Tooltip>
      <Tooltip {...args} position="right">
        <span className="rounded bg-gray-200 px-4 py-2">Right</span>
      </Tooltip>
    </div>
  ),
  args: {
    tooltipText: 'Tooltip'
  }
}
