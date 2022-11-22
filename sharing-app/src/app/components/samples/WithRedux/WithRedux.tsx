'use client'

import VisualComponent from '../../atomic/VisualComponent'
import Exchange from './Exchange'
import Wallet from './Wallet'
import { Provider } from 'react-redux'
import store from './redux/store'

export const WithRedux = () => {
  return (
    <Provider store={store}>
      <VisualComponent
        title="Blockchain"
        description="Using Redux to share data, this method separates the logic in a store, like a provider option, needs to wrap the children, and only the real clients need to add logic to use this.">
        <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
          <Exchange />
          <Wallet />
        </div>
      </VisualComponent>
    </Provider>
  )
}
export default WithRedux
