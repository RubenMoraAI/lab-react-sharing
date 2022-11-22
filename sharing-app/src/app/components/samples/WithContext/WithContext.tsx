'use client'

import VisualComponent from '../../atomic/VisualComponent'
import Exchange from './Exchange'
import Wallet from './Wallet'
import { AccountManagerProvider } from './context/AccountManager.context'

export const WithContext = () => {
  return (
    <AccountManagerProvider>
      <VisualComponent title="Blockchain" description="Using Context to share data, this method separates the logic into a provider. They need to wrap the children, but only the real clients need to add logic using this.">
        <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
          <Exchange />
          <Wallet />
        </div>
      </VisualComponent>
    </AccountManagerProvider>
  )
}
export default WithContext
