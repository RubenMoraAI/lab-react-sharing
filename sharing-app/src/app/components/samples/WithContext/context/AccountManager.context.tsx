import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

export interface AccountManager {
  exchange: number
  wallet: number
}
export interface ContextState {
  accountManagerContextValue: AccountManager
  setAccountManagerContextValue: Dispatch<SetStateAction<AccountManager>>
}

export const AccountManagerContext = createContext<ContextState>({} as ContextState)

export const AccountManagerProvider = ({ children }: { children: any }) => {
  const [accountManagerContextValue, setAccountManagerContextValue] = useState<AccountManager>({ exchange: 0.1, wallet: 0.5 })
  return <AccountManagerContext.Provider value={{ accountManagerContextValue: accountManagerContextValue, setAccountManagerContextValue }}>{children}</AccountManagerContext.Provider>
}

export const useAccountManagerContext = () => {
  const context = useContext(AccountManagerContext)
  if (Object.keys(context).length === 0) {
    throw new Error('AccountManagerContext must be used within a AccountManagerProvider')
  }
  return context
}
