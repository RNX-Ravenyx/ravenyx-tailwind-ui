import React from 'react'
import clsx from 'clsx'

import { Tooltip } from '../Tooltip'

export interface BadgeType {
  bg: string
  text: string
  svgFill: string
  ring: string // Dynamically set border color
}

export interface BadgeProps {
  type?: keyof typeof defaultBadgeTypes
  children: React.ReactNode
  tooltipText: string
  className?: string
  customBadgeTypes?: Record<string, BadgeType> // Allows users to override badge types
}

// Default Badge Types
const defaultBadgeTypes: Record<string, BadgeType> = {
  default: {
    bg: 'bg-gray-400/10',
    text: 'text-gray-400',
    svgFill: 'fill-gray-400',
    ring: 'ring-gray-400/20'
  },
  danger: {
    bg: 'bg-red-400/10',
    text: 'text-red-400',
    svgFill: 'fill-red-500',
    ring: 'ring-red-400/20'
  },
  warning: {
    bg: 'bg-yellow-400/10',
    text: 'dark:text-yellow-400 text-black',
    svgFill: 'fill-yellow-500',
    ring: 'ring-yellow-400/20'
  },
  success: {
    bg: 'bg-green-400/10',
    text: 'text-green-400',
    svgFill: 'fill-green-500',
    ring: 'ring-green-400/20'
  },
  info: {
    bg: 'bg-blue-400/10',
    text: 'text-blue-400',
    svgFill: 'fill-blue-500',
    ring: 'ring-blue-400/20'
  },
  indigo: {
    bg: 'bg-indigo-400/10',
    text: 'text-indigo-400',
    svgFill: 'fill-indigo-500',
    ring: 'ring-indigo-400/20'
  },
  purple: {
    bg: 'bg-purple-400/10',
    text: 'text-purple-400',
    svgFill: 'fill-purple-500',
    ring: 'ring-purple-400/20'
  },
  pink: {
    bg: 'bg-pink-400/10',
    text: 'text-pink-400',
    svgFill: 'fill-pink-500',
    ring: 'ring-pink-400/20'
  }
}

export const Badge: React.FC<BadgeProps> = ({
  type = 'default',
  children,
  tooltipText,
  className,
  customBadgeTypes
}) => {
  const badgeTypes = customBadgeTypes || defaultBadgeTypes
  const badgeType = badgeTypes[type] || badgeTypes['default']

  return (
    <Tooltip tooltipText={tooltipText}>
      <span
        className={clsx(
          'inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
          badgeType.bg,
          badgeType.text,
          badgeType.ring, // Dynamic border color
          className
        )}
      >
        <svg viewBox="0 0 6 6" aria-hidden="true" className={clsx('size-1.5', badgeType.svgFill)}>
          <circle r={3} cx={3} cy={3} />
        </svg>
        {children}
      </span>
    </Tooltip>
  )
}
