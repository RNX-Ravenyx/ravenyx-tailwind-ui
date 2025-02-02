import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './Tabs'
import React, { useState } from 'react'

const meta: Meta<typeof Tabs> = {
  title: 'Data Display/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    activeColor: { control: 'text' },
    inactiveColor: { control: 'text' }
  },
  args: {
    onChange: fn(),
    tabs: [
      { name: 'Tab 1', key: 'tab1' },
      { name: 'Tab 2', key: 'tab2' }
    ],
    activeKey: 'tab1'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [activeKey, setActiveKey] = useState(args.activeKey)
    return <Tabs {...args} activeKey={activeKey} onChange={setActiveKey} />
  }
}

export const CustomColors: Story = {
  args: {
    activeColor: 'text-red-600',
    underlineColor: 'bg-red-600',
    activeKey: 'home'
  },
  render: (args) => {
    const [activeKey, setActiveKey] = useState(args.activeKey)

    return (
      <Tabs
        {...args}
        tabs={[
          { name: 'Home', key: 'home' },
          { name: 'About', key: 'about' },
          { name: 'Contact', key: 'contact' }
        ]}
        activeKey={activeKey}
        onChange={setActiveKey}
      />
    )
  }
}
