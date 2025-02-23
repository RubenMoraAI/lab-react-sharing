'use client'
import AccountBox from '../../atomic/AccountBox'
import VisualComponent from '../../atomic/VisualComponent'
import { useAmounts } from './hooks/useAmounts'

export const WalletAccount = () => {
  const { amount, sendToWalletFromExchange } = useAmounts(0.5, 'wallet')

  return (
    <VisualComponent title="Wallet account" amount={`Amount: ${amount}`}>
      <AccountBox onClick={sendToWalletFromExchange} />
    </VisualComponent>
  )
}
export default WalletAccount
