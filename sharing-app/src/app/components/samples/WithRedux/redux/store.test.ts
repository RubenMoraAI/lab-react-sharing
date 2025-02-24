import store, { RootState } from './store';
import { sendFromWalletToExchange, sendFromExchangeToWallet, resetAccount } from './states/account';

describe('Redux Store', () => {
  it('should have the correct initial state', () => {
    const state: RootState = store.getState();
    expect(state.account).toEqual({ exchange: 0.1, wallet: 0.5 });
  });

  it('should handle sendFromWalletToExchange action', () => {
    store.dispatch(sendFromWalletToExchange(0.1));
    const state: RootState = store.getState();
    expect(state.account).toEqual({ exchange: 0.2, wallet: 0.4 });
  });

  it('should handle sendFromExchangeToWallet action', () => {
    store.dispatch(sendFromExchangeToWallet(0.1));
    const state: RootState = store.getState();
    expect(state.account).toEqual({ exchange: 0.1, wallet: 0.5 });
  });

  it('should handle resetAccount action', () => {
    store.dispatch(resetAccount());
    const state: RootState = store.getState();
    expect(state.account).toEqual({ exchange: 0.1, wallet: 0.5 });
  });
});
