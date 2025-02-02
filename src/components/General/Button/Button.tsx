import React from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

export interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link'
  shape?: 'default' | 'rectangle' | 'round'
  size?: 'small' | 'middle' | 'large'
  textColor?: string
  backgroundColor: string
  disabled?: boolean
  loading?: boolean
  block?: boolean
  danger?: boolean
  ghost?: boolean
  gradient?: boolean
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
  label?: string
  htmlType?: 'submit' | 'reset' | 'button'
  href?: string
  target?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({
  type = 'default',
  shape = 'circle',
  size = 'middle',
  disabled = false,
  loading = false,
  block = false,
  danger = false,
  ghost = false,
  gradient = false,
  icon,
  iconPosition = 'start',
  label,
  htmlType = 'button',
  href,
  target,
  onClick,
  ...props
}) => {
  // Size Classes
  const sizeClasses = {
    small: 'text-sm py-1 px-2',
    middle: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6'
  }[size]

  // Shape Classes
  const shapeClasses = {
    rectangle: 'rounded-md',
    round: 'rounded-lg',
    circle: 'rounded-full p-2'
  }[shape]

  // Type Variants
  const typeClasses = {
    primary: 'bg-primary text-on-primary hover:brightness-95',
    default: 'bg-surface text-on-surface border border-outline hover:bg-surface-container',
    dashed: 'border border-dashed border-outline text-on-surface hover:bg-surface-container',
    text: 'text-primary hover:underline',
    link: 'text-primary underline hover:no-underline'
  }[type]

  // Danger State
  const dangerClasses = danger ? 'bg-danger text-on-danger hover:brightness-95' : ''

  // Ghost State
  const ghostClasses = ghost ? `border border-current ${danger ? 'text-danger' : 'text-primary'}` : ''

  // Gradient
  const gradientClasses = gradient ? 'bg-gradient-to-r from-primary to-secondary' : ''

  // Additional Modifiers
  const modifiers = [
    loading ? 'cursor-wait' : '',
    disabled ? 'opacity-50 cursor-not-allowed' : '',
    block ? 'w-full' : ''
  ].join(' ')

  // Combined Classes
  const buttonClasses = [
    'inline-flex items-center justify-center font-medium focus:outline-none',
    sizeClasses,
    shapeClasses,
    typeClasses,
    dangerClasses,
    ghostClasses,
    gradientClasses,
    modifiers
  ]
    .filter(Boolean)
    .join(' ')

  // Click Handling
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading && !disabled && onClick) {
      onClick(event)
    }
  }

  // Render Link Button
  if (href) {
    return (
      <a href={href} target={target} className={buttonClasses} {...props}>
        {icon && iconPosition === 'start' && <span className="mr-2">{icon}</span>}
        {label}
        {icon && iconPosition === 'end' && <span className="ml-2">{icon}</span>}
      </a>
    )
  }

  return (
    <button type={htmlType} className={buttonClasses} disabled={disabled} onClick={handleClick} {...props}>
      {loading && <ArrowPathIcon className="mr-2 h-5 w-5 animate-spin" />}
      {icon && iconPosition === 'start' && <span className="mr-2">{icon}</span>}
      {label}
      {icon && iconPosition === 'end' && <span className="ml-2">{icon}</span>}
    </button>
  )
}
