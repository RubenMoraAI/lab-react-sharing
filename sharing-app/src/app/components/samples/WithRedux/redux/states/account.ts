import { createSlice } from '@reduxjs/toolkit'

export const AccountEmptyState = {
  exchange: 0.1,
  wallet: 0.5
}

export const accountSlice = createSlice({
  name: 'account',
  initialState: AccountEmptyState,
  reducers: {
    sendFromWalletToExchange: (state, action: { payload: number }) => {
      return {
        exchange: Number((state.exchange + action.payload).toFixed(8)),
        wallet: Number((state.wallet - action.payload).toFixed(8))
      }
    },
    sendFromExchangeToWallet: (state, action: { payload: number }) => {
      return {
        exchange: Number((state.exchange - action.payload).toFixed(8)),
        wallet: Number((state.wallet + action.payload).toFixed(8))
      }
    },
    resetAccount: () => {
      return AccountEmptyState
    }
  }
})

export const { sendFromWalletToExchange, sendFromExchangeToWallet, resetAccount } = accountSlice.actions
