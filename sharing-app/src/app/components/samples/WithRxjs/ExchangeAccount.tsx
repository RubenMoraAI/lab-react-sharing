'use client'
import AccountBox from '../../atomic/AccountBox'
import VisualComponent from '../../atomic/VisualComponent'
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
