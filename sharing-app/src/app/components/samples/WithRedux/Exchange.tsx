'use client'
import VisualComponent from '../../atomic/VisualComponent'
import { ExchangeAccount } from './ExchangeAccount'

export interface ExchangeProps {
  children: React.ReactNode
}

export const Exchange = () => {
  return (
    <VisualComponent title="Exchange">
      <ExchangeAccount />
    </VisualComponent>
  )
}
export default Exchange
