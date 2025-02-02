import React from 'react'
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline'

import { FloatButton } from './FloatButton'

const meta: Meta<typeof FloatButton> = {
  title: 'General/FloatButton',
  component: FloatButton,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    position: { control: 'select', options: ['bottom-right', 'bottom-left', 'top-right', 'top-left'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    icon: { control: 'select', options: ['default', 'search', 'plus'] }
  },
  args: { onClick: fn() }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const BottomLeft: Story = {
  args: {
    position: 'bottom-left'
  }
}

export const TopRight: Story = {
  args: {
    position: 'top-right'
  }
}

export const CustomIcon: Story = {
  args: {
    icon: <MagnifyingGlassIcon className="size-6" />
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    icon: <PlusIcon className="size-8" />
  }
}
