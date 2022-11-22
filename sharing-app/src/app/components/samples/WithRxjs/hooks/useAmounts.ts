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
  })

  const sendToExchangeFromWallet = (newAmount: number) => {
    if (amount < newAmount) return

    setAmount(exchangeAmount => Number((exchangeAmount - newAmount).toFixed(8)))

    rxjsShareSubject.setSubject({ exchange: 0, wallet: newAmount })
  }

  const sendToWalletFromExchange = (newAmount: number) => {
    if (amount < newAmount) return

    setAmount(exchangeAmount => Number((exchangeAmount - newAmount).toFixed(8)))

    rxjsShareSubject.setSubject({ exchange: newAmount, wallet: 0 })
  }

  return { amount, sendToExchangeFromWallet, sendToWalletFromExchange }
}
