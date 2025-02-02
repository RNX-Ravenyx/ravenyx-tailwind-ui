import React, { useState } from 'react'
import clsx from 'clsx'

export interface Tab {
  name: string
  key: string
}

export interface TabsProps {
  tabs: Tab[]
  activeKey: string
  onChange: (key: string) => void
  activeColor?: string
  inactiveColor?: string
  borderColor?: string
  underlineColor?: string
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeKey,
  onChange,
  activeColor = 'text-primary',
  inactiveColor = 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300',
  borderColor = 'border-gray-200',
  underlineColor = 'bg-primary'
}) => {
  const [underlineStyle, setUnderlineStyle] = useState({ left: '0px', width: '0px' })

  const updateUnderline = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, key: string) => {
    const target = event.currentTarget
    setUnderlineStyle({ left: `${target.offsetLeft}px`, width: `${target.offsetWidth}px` })
    onChange(key)
  }

  return (
    <div className="relative w-full">
      <div className={clsx('border-b', borderColor)}>
        <nav className="relative flex justify-start gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={(event) => updateUnderline(event, tab.key)}
              className={clsx(
                'relative whitespace-nowrap px-1 py-4 text-sm font-medium transition-colors',
                'focus:outline-none focus:ring-0 focus:ring-primary/50',
                tab.key === activeKey ? activeColor : inactiveColor
              )}
              aria-current={tab.key === activeKey ? 'page' : undefined}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Underline Animation */}
      <div
        className={clsx('absolute bottom-0 h-0.5 transition-all duration-300 ease-in-out', underlineColor)}
        style={{
          left: underlineStyle.left,
          width: underlineStyle.width
        }}
      />
    </div>
  )
}
