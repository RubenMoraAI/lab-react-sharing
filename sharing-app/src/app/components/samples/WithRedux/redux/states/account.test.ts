import { accountSlice, AccountEmptyState, sendFromWalletToExchange, sendFromExchangeToWallet, resetAccount } from './account';

describe('accountSlice', () => {
  it('should return the initial state', () => {
    expect(accountSlice.reducer(undefined, { type: undefined })).toEqual(AccountEmptyState);
  });

  it('should handle sendFromWalletToExchange', () => {
    const initialState = { exchange: 0.1, wallet: 0.5 };
    const action = { type: sendFromWalletToExchange.type, payload: 0.1 };
    const expectedState = { exchange: 0.2, wallet: 0.4 };
    expect(accountSlice.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle sendFromExchangeToWallet', () => {
    const initialState = { exchange: 0.1, wallet: 0.5 };
    const action = { type: sendFromExchangeToWallet.type, payload: 0.1 };
    const expectedState = { exchange: 0.0, wallet: 0.6 };
    expect(accountSlice.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle resetAccount', () => {
    const initialState = { exchange: 0.5, wallet: 0.5 };
    const action = { type: resetAccount.type };
    expect(accountSlice.reducer(initialState, action)).toEqual(AccountEmptyState);
  });
});
