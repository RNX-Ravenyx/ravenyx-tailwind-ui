import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'danger', 'warning', 'success', 'info', 'indigo', 'purple', 'pink']
    },
    tooltipText: { control: 'text' }
  },
  args: {
    tooltipText: 'This is a badge tooltip'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default',
    type: 'default'
  }
}

export const Danger: Story = {
  args: {
    children: 'Danger',
    type: 'danger'
  }
}

export const Warning: Story = {
  args: {
    children: 'Warning',
    type: 'warning'
  }
}

export const Success: Story = {
  args: {
    children: 'Success',
    type: 'success'
  }
}

export const Info: Story = {
  args: {
    children: 'Info',
    type: 'info'
  }
}

export const CustomBadgeType: Story = {
  args: {
    children: 'Custom Badge',
    type: 'custom',
    customBadgeTypes: {
      custom: {
        bg: 'bg-teal-400/10',
        text: 'text-teal-400',
        svgFill: 'fill-teal-500',
        ring: 'ring-indigo-400/20'
      }
    }
  }
}
