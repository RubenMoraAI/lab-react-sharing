'use client'

import VisualComponent from "../../atomic/VisualComponent"

export interface ExchangeProps {
  children: React.ReactNode
}

export const Exchange = ({ children }: ExchangeProps) => {
  return <VisualComponent title="Exchange">{children}</VisualComponent>
}
export default Exchange
