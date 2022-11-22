'use client'
import { VisualComponent, AccountBox } from '../../atomic'
import { useAccount } from './hooks/useAccount'

export const WalletAccount = () => {
  const { sendFromWalletToExchange, accountWallet } = useAccount()

  return (
    <VisualComponent title="Wallet account" amount={`Amount: ${accountWallet}`}>
      <AccountBox onClick={sendFromWalletToExchange} />
    </VisualComponent>
  )
}
export default WalletAccount
