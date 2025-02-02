import React, { useState, useRef, cloneElement, ReactElement } from 'react'

export interface TooltipProps {
  /** The element that triggers the tooltip */
  children: ReactElement
  /** The text content inside the tooltip */
  tooltipText: string
  /** The placement of the tooltip */
  position?: 'top' | 'bottom' | 'left' | 'right'
  /** Controls whether the tooltip is always visible */
  alwaysVisible?: boolean
  /** Custom background color */
  backgroundColor?: string
  /** Custom text color */
  textColor?: string
}

/**
 * Tooltip component that displays additional information when hovering, focusing, or clicking an element.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  children,
  tooltipText,
  position = 'top',
  alwaysVisible = false,
  backgroundColor = 'bg-black',
  textColor = 'text-white'
}) => {
  const [visible, setVisible] = useState(alwaysVisible)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const showTooltip = () => !alwaysVisible && setVisible(true)
  const hideTooltip = () => !alwaysVisible && setVisible(false)

  // Tooltip positioning
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  }[position]

  return (
    <div className="relative inline-block">
      {cloneElement(children, {
        onMouseEnter: showTooltip,
        onMouseLeave: hideTooltip,
        onFocus: showTooltip,
        onBlur: hideTooltip
      })}

      {visible && (
        <div
          ref={tooltipRef}
          className={`absolute z-50 whitespace-nowrap rounded-md px-2 py-1 text-xs shadow-lg transition-opacity duration-200 ease-in-out ${backgroundColor} ${textColor} ${positionClasses}`}
        >
          {tooltipText}
        </div>
      )}
    </div>
  )
}
