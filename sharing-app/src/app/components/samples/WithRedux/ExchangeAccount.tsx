'use client'
import { useDispatch, useSelector } from 'react-redux'
import { sendFromExchangeToWallet } from './redux/states/account'
import { RootState } from './redux/store'
import VisualComponent from '../../atomic/VisualComponent'
import AccountBox from '../../atomic/AccountBox'

export const ExchangeAccount = () => {
  const dispatcher = useDispatch()

  const exchange = useSelector((state: RootState) => state.account.exchange)

  const sendToWallet = (amount: number) => {
    dispatcher(sendFromExchangeToWallet(amount))
  }

  return (
    <VisualComponent title="Exchange account" amount={`Amount: ${exchange}`}>
      <AccountBox onClick={sendToWallet} />
    </VisualComponent>
  )
}
export default ExchangeAccount
