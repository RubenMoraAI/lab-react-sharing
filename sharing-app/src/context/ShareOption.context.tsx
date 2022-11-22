import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

export interface ContextState {
  shareOptionContextValue: string
  setShareOptionContextValue: Dispatch<SetStateAction<string>>
}

export const ShareOptionContext = createContext<ContextState>({} as ContextState)

export const ShareOptionProvider = ({ children }: { children: any }) => {
  const [ShareOptionContextValue, setShareOptionContextValue] = useState<string>('props')
  return <ShareOptionContext.Provider value={{ shareOptionContextValue: ShareOptionContextValue, setShareOptionContextValue }}>{children}</ShareOptionContext.Provider>
}

export const useShareOptionContext = () => {
  const context = useContext(ShareOptionContext)
  if (context === undefined) {
    throw new Error('ShareOptionContext must be used within a ShareOptionProvider')
  }
  return context
}
