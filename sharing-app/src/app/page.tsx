'use client'

import { useShareOptionContext } from '../context/ShareOption.context'
import { componentsByShareOption, ComponentsByShareOptionKey } from './components'

export const HomePage = () => {
  const { shareOptionContextValue } = useShareOptionContext()

  return componentsByShareOption[shareOptionContextValue as ComponentsByShareOptionKey] || <div>Sharing data option not found, please check the original list</div>
}
export default HomePage
