import { configureStore } from '@reduxjs/toolkit'
import { accountSlice } from './states/account'

export const store = configureStore({
  reducer: {
    account: accountSlice.reducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
