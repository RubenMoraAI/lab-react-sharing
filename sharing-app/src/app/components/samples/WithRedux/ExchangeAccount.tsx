'use client'
import { useDispatch, useSelector } from 'react-redux'
import { VisualComponent, AccountBox } from '../../atomic'
import { sendFromExchangeToWallet } from './redux/states/account'
import { RootState } from './redux/store'

export const ExchangeAccount = () => {
  const dispatcher = useDispatch()

  const exchange = useSelector<RootState>(state => state.account.exchange)

  const sendToWallet = (amount: number) => {
    dispatcher(sendFromExchangeToWallet( amount ))
  }

  return (
    <VisualComponent title="Exchange account" amount={`Amount: ${exchange}`}>
      <AccountBox onClick={sendToWallet} />
    </VisualComponent>
  )
}
export default ExchangeAccount
