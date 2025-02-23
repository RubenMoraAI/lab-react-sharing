'use client'

import { useState } from 'react'
import VisualComponent from '../../atomic/VisualComponent'
import { Exchange } from './Exchange'
import { Wallet } from './Wallet'

export const WithStateLifting = () => {
  const [amounts, setAmounts] = useState({ exchange: 0.1, wallet: 0.5 })

  const sendFromExchangeToWallet = (amount: number) => {
    if (amounts.exchange < amount) return

    setAmounts(prev => ({
      exchange: Number((prev.exchange - amount).toFixed(8)),
      wallet: Number((prev.wallet + amount).toFixed(8))
    }))
  }

  const sendFromWalletToExchange = (amount: number) => {
    if (amounts.wallet < amount) return

    setAmounts(prev => ({
      wallet: Number((prev.wallet - amount).toFixed(8)),
      exchange: Number((prev.exchange + amount).toFixed(8))
    }))
  }

  return (
    <VisualComponent title="Blockchain" description="Using State Lifting to share data, this method moves state to a common parent and passes it down through props.">
      <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
        <Exchange exchangeAmount={amounts.exchange} sendFromExchangeToWallet={sendFromExchangeToWallet} />
        <Wallet walletAmount={amounts.wallet} sendFromWalletToExchange={sendFromWalletToExchange} />
      </div>
    </VisualComponent>
  )
}

export default WithStateLifting
