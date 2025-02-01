import React, { createContext, useContext, ReactNode } from 'react'

interface Theme {
  primary?: string
  secondary?: string
  surface?: string
  onPrimary?: string
  onSurface?: string
  onDanger?: string
  danger?: string
  fontFamily?: string
}

interface ThemeProviderProps {
  theme?: Theme
  children: ReactNode
}

const defaultTheme: Theme = {
  primary: '#1DA1F2',
  secondary: '#14171A',
  surface: '#FFFFFF',
  onPrimary: '#FFFFFF',
  onSurface: '#000000',
  danger: '#EF4444',
  onDanger: '#FFFFFF',
  fontFamily: 'Inter, sans-serif'
}

const ThemeContext = createContext<Theme>(defaultTheme)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const mergedTheme = { ...defaultTheme, ...theme }
  return <ThemeContext.Provider value={mergedTheme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
