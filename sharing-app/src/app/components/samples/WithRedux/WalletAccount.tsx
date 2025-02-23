'use client'

import { useDispatch, useSelector } from 'react-redux'
import { sendFromWalletToExchange } from './redux/states/account'
import { RootState } from './redux/store'
import VisualComponent from '../../atomic/VisualComponent'
import AccountBox from '../../atomic/AccountBox'

export const WalletAccount = () => {
  const dispatcher = useDispatch()
  const wallet = useSelector<RootState>(state => state.account.wallet)

  const sendToExchange = (amount: number) => {
    dispatcher(sendFromWalletToExchange( amount ))
  }

  return (
    <VisualComponent title="Wallet account" amount={`Amount: ${wallet}`}>
      <AccountBox onClick={sendToExchange} />
    </VisualComponent>
  )
}
