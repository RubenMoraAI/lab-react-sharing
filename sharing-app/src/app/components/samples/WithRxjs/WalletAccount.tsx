'use client'
import { VisualComponent, AccountBox } from '../../atomic'
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
