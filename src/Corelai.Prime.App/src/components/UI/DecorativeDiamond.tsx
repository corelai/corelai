import React from 'react'

type DecorativeDiamondProps = {
  className?: string
}

export const DecorativeDiamond: React.FC<DecorativeDiamondProps> = ({ className }) => {
  return (
    <div
      className={`absolute skew-x-[-30deg] rounded-bl-2xl bg-gradient-to-r from-gold-800 to-gold-50 opacity-70 ${className}`}
    />
  )
}

export default DecorativeDiamond