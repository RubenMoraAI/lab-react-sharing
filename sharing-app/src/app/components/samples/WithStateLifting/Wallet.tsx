'use client'

import VisualComponent from '../../atomic/VisualComponent'
import { WalletAccount } from './WalletAccount'

export interface WalletProps {
  walletAmount: number
  sendFromWalletToExchange: (amount: number) => void
}

export const Wallet = (props: WalletProps) => {
  return (
    <VisualComponent title="Wallet">
      <WalletAccount {...props} />
    </VisualComponent>
  )
}

export default Wallet
