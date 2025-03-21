'use client'

import VisualComponent from '../../atomic/VisualComponent'
import { useAmounts } from './hooks/useAmounts'
import Exchange from './Exchange'
import ExchangeAccount from './ExchangeAccount'
import Wallet from './Wallet'
import WalletAccount from './WalletAccount'

export const WithHOC = () => {
  const { amounts, sendFromExchangeToWallet, sendFromWalletToExchange } = useAmounts()

  return (
    <VisualComponent
      title="Blockchain"
      description="Using HOC to share data, this method keeps the data in a common parent and wraps child components to provide access to specific components, injecting data through props.">
      <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
        <Exchange>
          <ExchangeAccount exchangeAmount={amounts.exchange} sendFromExchangeToWallet={sendFromExchangeToWallet} />
        </Exchange>
        <Wallet>
          <WalletAccount walletAmount={amounts.wallet} sendFromWalletToExchange={sendFromWalletToExchange} />
        </Wallet>
      </div>
    </VisualComponent>
  )
}
export default WithHOC
