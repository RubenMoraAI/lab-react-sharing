'use client'
import { WalletAccount } from './WalletAccount'
import { VisualComponent } from '../../atomic'

export const Wallet = () => {
  return (
    <VisualComponent title="Wallet">
      <WalletAccount />
    </VisualComponent>
  )
}
export default Wallet
