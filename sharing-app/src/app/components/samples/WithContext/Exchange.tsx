'use client'
import { ExchangeAccount } from './ExchangeAccount'
import { VisualComponent } from '../../atomic'

export const Exchange = () => {
  return (
    <VisualComponent title="Exchange">
      <ExchangeAccount />
    </VisualComponent>
  )
}
export default Exchange
