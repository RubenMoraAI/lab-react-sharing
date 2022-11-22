'use client'

import { useDispatch, useSelector } from 'react-redux'
import { VisualComponent, AccountBox } from '../../atomic'
import { sendFromWalletToExchange } from './redux/states/account'
import { RootState } from './redux/store'

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
