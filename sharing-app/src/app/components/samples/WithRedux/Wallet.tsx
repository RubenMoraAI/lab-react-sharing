'use client'
import { VisualComponent } from '../../atomic'
import { WalletAccount } from './WalletAccount'

export const Wallet = () => {
  return (
    <VisualComponent title="Wallet">
      <WalletAccount />
    </VisualComponent>
  )
}
export default Wallet
