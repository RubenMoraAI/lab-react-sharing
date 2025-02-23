import { renderHook, act } from '@testing-library/react';
import { useAccountManagerContext, AccountManagerProvider } from '../context/AccountManager.context';
import { useAccount } from './useAccount';

jest.mock('../context/AccountManager.context', () => ({
  useAccountManagerContext: jest.fn(),
}));

describe('useAccount', () => {
  const setAccountManagerContextValue = jest.fn();
  const accountManagerContextValue = { exchange: 0.1, wallet: 0.5 };

  beforeEach(() => {
    jest.clearAllMocks();
    (useAccountManagerContext as jest.Mock).mockReturnValue({
      setAccountManagerContextValue,
      accountManagerContextValue,
    });
  });

  it('should send amount from wallet to exchange', () => {
    const { result } = renderHook(() => useAccount(), {
      wrapper: AccountManagerProvider,
    });

    act(() => {
      result.current.sendFromWalletToExchange(0.1);
    });

    expect(setAccountManagerContextValue).toHaveBeenCalledWith({
      exchange: 0.2,
      wallet: 0.4,
    });
  });

  it('should not send amount from wallet to exchange if insufficient funds', () => {
    const { result } = renderHook(() => useAccount(), {
      wrapper: AccountManagerProvider,
    });

    act(() => {
      result.current.sendFromWalletToExchange(0.6);
    });

    expect(setAccountManagerContextValue).not.toHaveBeenCalled();
  });

  it('should send amount from exchange to wallet', () => {
    const { result } = renderHook(() => useAccount(), {
      wrapper: AccountManagerProvider,
    });

    act(() => {
      result.current.sendFromExchangeToWallet(0.1);
    });

    expect(setAccountManagerContextValue).toHaveBeenCalledWith({
      exchange: 0.0,
      wallet: 0.6,
    });
  });

  it('should not send amount from exchange to wallet if insufficient funds', () => {
    const { result } = renderHook(() => useAccount(), {
      wrapper: AccountManagerProvider,
    });

    act(() => {
      result.current.sendFromExchangeToWallet(0.2);
    });

    expect(setAccountManagerContextValue).not.toHaveBeenCalled();
  });

  it('should return the correct account values', () => {
    const { result } = renderHook(() => useAccount(), {
      wrapper: AccountManagerProvider,
    });

    expect(result.current.accountWallet).toBe(0.5);
    expect(result.current.accountExchange).toBe(0.1);
  });
});
