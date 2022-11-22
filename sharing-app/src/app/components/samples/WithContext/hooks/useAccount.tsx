'use client'
import { useAccountManagerContext } from '../context/AccountManager.context'

export const useAccount = () => {
  const { setAccountManagerContextValue, accountManagerContextValue: accounts } = useAccountManagerContext()

  const sendFromWalletToExchange = (amount: number) => {
    if (accounts.wallet < amount) return

    const exchange = Number((accounts.exchange + amount).toFixed(8))
    const wallet = Number((accounts.wallet - amount).toFixed(8))

    setAccountManagerContextValue({ exchange, wallet })
  }
  const sendFromExchangeToWallet = (amount: number) => {
    if (accounts.wallet < amount) return

    const exchange = Number((accounts.exchange - amount).toFixed(8))
    const wallet = Number((accounts.wallet + amount).toFixed(8))

    setAccountManagerContextValue({ exchange, wallet })
  }

  return { sendFromWalletToExchange, sendFromExchangeToWallet, accountWallet: accounts.wallet, accountExchange: accounts.exchange }
}
