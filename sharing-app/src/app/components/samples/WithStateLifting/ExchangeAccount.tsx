'use client'

import AccountBox from "../../atomic/AccountBox"
import VisualComponent from "../../atomic/VisualComponent"


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
