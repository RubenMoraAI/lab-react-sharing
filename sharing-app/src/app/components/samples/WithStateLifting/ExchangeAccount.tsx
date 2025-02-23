'use client'

import { VisualComponent, AccountBox } from '../../atomic'

export interface ExchangeAccountProps {
  exchangeAmount: number
  sendFromExchangeToWallet: (amount: number) => void
}

export const ExchangeAccount = ({ exchangeAmount, sendFromExchangeToWallet }: ExchangeAccountProps) => {
  return (
    <VisualComponent title="Exchange Account" amount={`Amount: ${exchangeAmount}`}>
      <AccountBox onClick={sendFromExchangeToWallet} />
    </VisualComponent>
  )
}

export default ExchangeAccount
