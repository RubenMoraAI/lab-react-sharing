'use client'

import VisualComponent from '../../atomic/VisualComponent'
import Exchange from './Exchange'
import Wallet from './Wallet'

export const WithRxjs = () => {
  return (
    <VisualComponent
      title="Blockchain"
      description="Using RxJS to share data, this method relies on external libraries and requires maintaining a separate entity, such as a service, enabling access to data from any part of the code.">
      <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
        <Exchange />
        <Wallet />
      </div>
    </VisualComponent>
  )
}
export default WithRxjs
