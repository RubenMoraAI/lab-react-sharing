'use client'
import { VisualComponent, AccountBox } from '../../atomic'
import { useAmounts } from './hooks/useAmounts'

export const ExchangeAccount = () => {
  const { amount, sendToExchangeFromWallet } = useAmounts(0.1, 'exchange')
  return (
    <VisualComponent title="Exchange account" amount={`Amount: ${amount}`}>
      <AccountBox onClick={sendToExchangeFromWallet} />
    </VisualComponent>
  )
}
export default ExchangeAccount
