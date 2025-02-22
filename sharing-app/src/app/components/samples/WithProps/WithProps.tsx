'use client'

import VisualComponent from '../../atomic/VisualComponent'
import { useAmounts } from './hooks/useAmounts'
import Exchange from './Exchange'
import Wallet from './Wallet'

export const WithProps = () => {
  const { amounts, sendFromExchangeToWallet, sendFromWalletToExchange } = useAmounts()

  return (
    <VisualComponent
      title="Blockchain"
      description="Using Props to share data, this method keeps the data in a common parent and passes it down to all child components through props, even if some do not use it.">
      <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
        <Exchange exchangeAmount={amounts.exchange} sendFromExchangeToWallet={sendFromExchangeToWallet} />
        <Wallet walletAmount={amounts.wallet} sendFromWalletToExchange={sendFromWalletToExchange} />
      </div>
    </VisualComponent>
  )
}
export default WithProps
