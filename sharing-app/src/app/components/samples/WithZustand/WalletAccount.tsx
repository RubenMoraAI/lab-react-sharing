'use client'


import AccountBox from '../../atomic/AccountBox'
import VisualComponent from '../../atomic/VisualComponent'
import { useAmountsStore } from './store/useAmountsStore'
export const WalletAccount = () => {
  const walletAmount = useAmountsStore(state => state.wallet)
  const sendFromWalletToExchange = useAmountsStore(state => state.sendFromWalletToExchange)

  return (
    <VisualComponent title="Wallet account" amount={`Amount: ${walletAmount}`}>
      <AccountBox onClick={sendFromWalletToExchange} />
    </VisualComponent>
  )
}

export default WalletAccount
