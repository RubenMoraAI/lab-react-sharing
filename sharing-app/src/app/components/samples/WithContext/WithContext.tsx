'use client'

import VisualComponent from '../../atomic/VisualComponent'
import Exchange from './Exchange'
import Wallet from './Wallet'
import { AccountManagerProvider } from './context/AccountManager.context'

export const WithContext = () => {
  return (
    <AccountManagerProvider>
      <VisualComponent title="Blockchain" description="With Context, data-sharing logic is encapsulated within a provider. Child components are wrapped by the provider, while only direct consumers implement specific logic.">
        <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
          <Exchange />
          <Wallet />
        </div>
      </VisualComponent>
    </AccountManagerProvider>
  )
}
export default WithContext
