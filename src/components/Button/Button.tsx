import React from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../../theme'

export interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link'
  shape?: 'default' | 'circle' | 'round'
  size?: 'small' | 'middle' | 'large'
  backgroundColor?: string
  textColor?: string
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
  shape = 'default',
  size = 'middle',
  backgroundColor,
  textColor,
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
  const theme = useTheme()

  // Compute default colors based on type and modifiers
  let defaultBackgroundColor: string | undefined
  let defaultTextColor: string | undefined

  if (danger) {
    defaultBackgroundColor = theme.danger
    defaultTextColor = theme.onDanger
  } else {
    switch (type) {
      case 'primary':
        defaultBackgroundColor = theme.primary
        defaultTextColor = theme.onPrimary
        break
      case 'default':
        defaultBackgroundColor = theme.surface
        defaultTextColor = theme.onSurface
        break
      case 'dashed':
        defaultBackgroundColor = 'transparent'
        defaultTextColor = theme.onSurface
        break
      case 'text':
      case 'link':
        defaultBackgroundColor = 'transparent'
        defaultTextColor = theme.primary
        break
      default:
        defaultBackgroundColor = theme.primary
        defaultTextColor = theme.onPrimary
    }
  }

  if (ghost) {
    defaultBackgroundColor = 'transparent'
    defaultTextColor = danger ? theme.danger : theme.primary
  }

  // Size Classes
  const sizeClasses = {
    small: 'text-sm py-1 px-2',
    middle: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6'
  }[size]

  // Shape Classes
  const shapeClasses = {
    default: 'rounded',
    round: 'rounded-lg',
    circle: 'rounded-full p-2'
  }[shape]

  // Type Variants (excluding colors)
  const typeClasses = {
    primary: 'hover:brightness-95',
    default: 'border border-outline hover:brightness-95',
    dashed: 'border border-dashed border-outline hover:bg-surface-container',
    text: 'hover:underline',
    link: 'underline hover:no-underline'
  }[type]

  // Additional Modifiers
  const modifiers = `
    ${ghost ? 'border border-current' : ''}
    ${gradient ? 'bg-gradient-to-r' : ''}
    ${loading ? 'cursor-wait' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${block ? 'w-full' : ''}
  `.trim()

  // Common Button Classes
  const buttonClasses = `
  inline-flex items-center justify-center font-medium focus:outline-none
  ${sizeClasses} ${shapeClasses} ${typeClasses} ${modifiers}
  ${ghost ? '!bg-transparent' : ''} /* Force override */
  ${gradient ? 'bg-clip-padding' : ''} /* Fix gradient bleeding */
`.trim()

  // Style computation
  const style: React.CSSProperties = {
    color: textColor ?? defaultTextColor,
    fontFamily: theme.fontFamily
  }

  if (gradient && !danger) {
    style.backgroundImage = `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`
  } else {
    style.backgroundColor = backgroundColor ?? defaultBackgroundColor
  }

  // Click Handling
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!loading && !disabled && onClick) {
      onClick(event)
    }
  }

  // Render Link Button
  if (href) {
    return (
      <a href={href} target={target} className={buttonClasses} style={style} {...props}>
        {icon && iconPosition === 'start' && <span className="mr-2">{icon}</span>}
        {label}
        {icon && iconPosition === 'end' && <span className="ml-2">{icon}</span>}
      </a>
    )
  }

  return (
    <button
      type={htmlType}
      className={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
      style={style}
      {...props}
    >
      {loading && <ArrowPathIcon className="mr-2 h-5 w-5 animate-spin" />}
      {icon && iconPosition === 'start' && <span className="mr-2">{icon}</span>}
      {label}
      {icon && iconPosition === 'end' && <span className="ml-2">{icon}</span>}
    </button>
  )
}
