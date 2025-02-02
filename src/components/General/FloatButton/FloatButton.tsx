import React from 'react'
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export interface FloatButtonProps {
  onClick: () => void
  icon?: React.ReactNode
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
  textColor?: string
  className?: string
}

/** A floating button that sticks to the screen */
export const FloatButton: React.FC<FloatButtonProps> = ({
  onClick,
  icon = <Bars3BottomRightIcon className="size-6" />,
  position = 'bottom-right',
  size = 'medium',
  backgroundColor,
  textColor = 'text-black',
  className
}) => {
  // Position Mapping
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  }[position]

  // Size Mapping
  const sizeClasses = {
    small: 'size-8',
    medium: 'size-12',
    large: 'size-16'
  }[size]

  return (
    <button
      onClick={onClick}
      className={clsx(
        'fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-all hover:opacity-80 active:scale-90',
        sizeClasses,
        textColor,
        positionClasses,
        className
      )}
      style={{ backgroundColor }}
    >
      {icon}
    </button>
  )
}
