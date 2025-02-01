import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { ThemeProvider } from './ThemeProvider'
import { Button } from '../../components/Button'

export default {
  title: 'Theming/ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    primary: { control: 'color' },
    secondary: { control: 'color' },
    background: { control: 'color' },
    foreground: { control: 'color' },
    textColor: { control: 'color' },
    fontFamily: { control: 'text' }
  }
} as Meta<typeof ThemeProvider>

const InteractiveTheme: StoryFn = (args) => {
  return (
    <ThemeProvider theme={args}>
      <div style={{ backgroundColor: args.background, color: args.foreground, padding: '20px' }}>
        <h3 style={{ fontFamily: args.fontFamily }}>Theming in Action!</h3>
        <Button label="Primary Button" primary textColor={args.textColor} backgroundColor={args.primary} />
      </div>
    </ThemeProvider>
  )
}

export const InteractiveThemeStory = InteractiveTheme.bind({})
InteractiveThemeStory.args = {
  primary: '#1DA1F2',
  secondary: '#14171A',
  background: '#FFFFFF',
  foreground: '#000000',
  textColor: '#FFFFFF',
  fontFamily: 'Inter, sans-serif'
}
