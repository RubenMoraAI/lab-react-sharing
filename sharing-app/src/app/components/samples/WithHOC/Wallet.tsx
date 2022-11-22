'use client'
import { VisualComponent } from '../../atomic'

export interface WalletProps {
  children: React.ReactNode
}

export const Wallet = ({ children }: WalletProps) => {
  return <VisualComponent title="Wallet">{children}</VisualComponent>
}
export default Wallet
