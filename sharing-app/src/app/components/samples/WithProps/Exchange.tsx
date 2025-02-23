'use client'
import VisualComponent from '../../atomic/VisualComponent'
import ExchangeAccount from './ExchangeAccount'

export interface ExchangeProps {
  exchangeAmount: number
  sendFromExchangeToWallet: (amount: number) => void
}

export const Exchange = (props: ExchangeProps) => {
  return (
    <VisualComponent title="Exchange">
      <ExchangeAccount {...props} />
    </VisualComponent>
  )
}
export default Exchange
