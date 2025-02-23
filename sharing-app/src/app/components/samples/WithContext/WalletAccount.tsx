'use client'
import AccountBox from '../../atomic/AccountBox'
import VisualComponent from '../../atomic/VisualComponent'
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
