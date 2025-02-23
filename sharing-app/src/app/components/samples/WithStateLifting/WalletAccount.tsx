'use client'

import AccountBox from "../../atomic/AccountBox"
import VisualComponent from "../../atomic/VisualComponent"


export interface WalletAccountProps {
  walletAmount: number
  sendFromWalletToExchange: (amount: number) => void
}

export const WalletAccount = ({ walletAmount, sendFromWalletToExchange }: WalletAccountProps) => {
  return (
    <VisualComponent title="Wallet Account" amount={`Amount: ${walletAmount}`}>
      <AccountBox onClick={sendFromWalletToExchange} />
    </VisualComponent>
  )
}

export default WalletAccount
