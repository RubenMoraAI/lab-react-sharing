'use client'

import { ReactNode } from 'react'

interface LabeledBoxProps {
  label: ReactNode
  children?: ReactNode
}
export const LabeledBox = ({ label, children }: LabeledBoxProps) => {
  return (
    <div>
      <div>{label}</div>
      {children}
    </div>
  )
}
