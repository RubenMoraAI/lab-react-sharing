'use client'
import { ChangeEvent, KeyboardEvent, FocusEvent, useState } from 'react'

interface UseAccountBoxProps {
  onClick: (amount: number) => void
}
export const useAccountBox = ({ onClick }: UseAccountBoxProps) => {
  const [amount, setAmount] = useState<string>('0.01000000')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAmount(value)
  }

  const handleClick = () => {
    onClick(Number(amount))
  }

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick(Number(amount))
    }
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const value = e.target.value
    const newNumber = Number(value) || 0
    setAmount(newNumber.toFixed(8))
  }

  return {
    handleClick,
    handleOnChange,
    handleEnter,
    handleBlur,
    amount
  }
}
