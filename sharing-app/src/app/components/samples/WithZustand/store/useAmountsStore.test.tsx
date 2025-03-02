import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { useAmountsStore } from './useAmountsStore';

describe('useAmountsStore', () => {
  it('has initial state', () => {
    const { result } = renderHook(() => useAmountsStore());
    expect(result.current.exchange).toBe(0.1);
    expect(result.current.wallet).toBe(0.5);
  });

  it('sends amount from exchange to wallet', () => {
    const { result } = renderHook(() => useAmountsStore());
    act(() => {
      result.current.sendFromExchangeToWallet(0.05);
    });
    expect(result.current.exchange).toBe(0.05);
    expect(result.current.wallet).toBe(0.55);
  });

  it('does not send amount from exchange to wallet if amount is greater than exchange amount', () => {
    const { result } = renderHook(() => useAmountsStore());
    act(() => {
      result.current.sendFromExchangeToWallet(0.15);
    });
    expect(result.current.exchange).toBe(0.05);
    expect(result.current.wallet).toBe(0.55);
  });

  it('sends amount from wallet to exchange', () => {
    const { result } = renderHook(() => useAmountsStore());
    act(() => {
      result.current.sendFromWalletToExchange(0.1);
    });
    expect(result.current.wallet).toBe(0.45);
    expect(result.current.exchange).toBe(0.15);
  });

  it('does not send amount from wallet to exchange if amount is greater than wallet amount', () => {
    const { result } = renderHook(() => useAmountsStore());
    act(() => {
      result.current.sendFromWalletToExchange(0.6);
    });
    expect(result.current.wallet).toBe(0.45);
    expect(result.current.exchange).toBe(0.15);
  });

  it('does not send amount from exchange to wallet if amount is zero or negative', () => {
    const { result } = renderHook(() => useAmountsStore());
    act(() => {
      result.current.sendFromExchangeToWallet(0);
    });
    expect(result.current.exchange).toBe(0.15);
    expect(result.current.wallet).toBe(0.45);

    act(() => {
      result.current.sendFromExchangeToWallet(-0.1);
    });
    expect(result.current.exchange).toBe(0.15);
    expect(result.current.wallet).toBe(0.45);
  });

  it('does not send amount from wallet to exchange if amount is zero or negative', () => {
    const { result } = renderHook(() => useAmountsStore());
    act(() => {
      result.current.sendFromWalletToExchange(0);
    });
    expect(result.current.wallet).toBe(0.45);
    expect(result.current.exchange).toBe(0.15);

    act(() => {
      result.current.sendFromWalletToExchange(-0.1);
    });
    expect(result.current.wallet).toBe(0.45);
    expect(result.current.exchange).toBe(0.15);
  });
});
