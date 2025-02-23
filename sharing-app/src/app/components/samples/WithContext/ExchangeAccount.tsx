'use client'
import AccountBox from '../../atomic/AccountBox'
import VisualComponent from '../../atomic/VisualComponent'
import { useAccount } from './hooks/useAccount'

export const ExchangeAccount = () => {
  const { sendFromExchangeToWallet, accountExchange } = useAccount()

  return (
    <VisualComponent title="Exchange account" amount={`Amount: ${accountExchange}`}>
      <AccountBox onClick={sendFromExchangeToWallet} />
    </VisualComponent>
  )
}
export default ExchangeAccount
