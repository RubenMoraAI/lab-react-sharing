import { useState } from 'react'

export const useAmounts = () => {
  const [amounts, setAmounts] = useState<{ exchange: number; wallet: number }>({ exchange: 0.1, wallet: 0.5 })

  const sendFromExchangeToWallet = (amount: number) => {
    if (amounts.exchange < amount) return

    const exchange = Number((amounts.exchange - amount).toFixed(8))
    const wallet = Number((amounts.wallet + amount).toFixed(8))

    setAmounts(() => ({ exchange, wallet }))
  }

  const sendFromWalletToExchange = (amount: number) => {
    if (amounts.wallet < amount) return

    const wallet = Number((amounts.wallet - amount).toFixed(8))
    const exchange = Number((amounts.exchange + amount).toFixed(8))

    setAmounts(() => ({ wallet, exchange }))
  }

  return { amounts, sendFromExchangeToWallet, sendFromWalletToExchange }
}
