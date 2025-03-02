// store/useAmountsStore.ts
import { create } from 'zustand'

interface AmountsState {
  exchange: number
  wallet: number
}

interface AmountsActions {
  sendFromExchangeToWallet: (amount: number) => void
  sendFromWalletToExchange: (amount: number) => void
}

interface AmountsStore extends AmountsState, AmountsActions {}

export const useAmountsStore = create<AmountsStore>(set => ({
  exchange: 0.1,
  wallet: 0.5,
  sendFromExchangeToWallet: amount => {
    set(state => {
      if (state.exchange < amount || amount < 0) return state

      const exchange = Number((state.exchange - amount).toFixed(8))
      const wallet = Number((state.wallet + amount).toFixed(8))

      return { exchange, wallet }
    })
  },
  sendFromWalletToExchange: amount => {
    set(state => {
      if (state.wallet < amount || amount < 0) return state

      const wallet = Number((state.wallet - amount).toFixed(8))
      const exchange = Number((state.exchange + amount).toFixed(8))

      return { wallet, exchange }
    })
  }
}))
