'use client'
import { useState, useEffect } from 'react'
import { rxjsShareSubject } from './subjects/rxjsShareSubject'

export const useAmounts = (initialAmount: number, type: 'wallet' | 'exchange') => {
  const [amount, setAmount] = useState<number>(initialAmount)

  const observable$ = rxjsShareSubject.subject$

  useEffect(() => {
    const subscription = observable$.subscribe(amount => {
      if (type === 'wallet') {
        if (amount.wallet <= 0) return
        setAmount(walletAmount => Number((walletAmount + amount.wallet).toFixed(8)))
      }
      if (type === 'exchange') {
        if (amount.exchange <= 0) return
        setAmount(exchangeAmount => Number((exchangeAmount + amount.exchange).toFixed(8)))
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [observable$, type])

  const sendToExchangeFromWallet = (amountToSend: number) => {
    if (type === 'wallet' && amount >= amountToSend && amountToSend > 0) {
      setAmount(walletAmount => Number((walletAmount - amountToSend).toFixed(8)))
      rxjsShareSubject.setSubject({ wallet: -amountToSend, exchange: amountToSend })
    }
  }

  const sendToWalletFromExchange = (amountToSend: number) => {
    if (type === 'exchange' && amount >= amountToSend && amountToSend > 0) {
      setAmount(exchangeAmount => Number((exchangeAmount - amountToSend).toFixed(8)))
      rxjsShareSubject.setSubject({ wallet: amountToSend, exchange: -amountToSend })
    }
  }

  return { amount, sendToExchangeFromWallet, sendToWalletFromExchange }
}
