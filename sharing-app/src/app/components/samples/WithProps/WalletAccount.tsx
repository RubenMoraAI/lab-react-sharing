'use client'
import { VisualComponent, AccountBox } from '../../atomic'

export interface WalletAccountProps {
  walletAmount: number
  sendFromWalletToExchange: (amount: number) => void
}
export const WalletAccount = ({ walletAmount, sendFromWalletToExchange }: WalletAccountProps) => {
  return (
    <VisualComponent title="Wallet account" amount={`Amount: ${walletAmount}`}>
      <AccountBox onClick={sendFromWalletToExchange} />
    </VisualComponent>
  )
}
export default WalletAccount
