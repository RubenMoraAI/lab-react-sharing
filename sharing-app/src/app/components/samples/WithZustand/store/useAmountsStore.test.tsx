import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { useAmountsStore } from './useAmountsStore';

const { result } = renderHook(() => useAmountsStore());

describe('useAmountsStore', () => {
  it('has initial state', () => {
    expect(result.current.exchange).toBe(0.1);
    expect(result.current.wallet).toBe(0.5);
  });

  it('sends amount from exchange to wallet', () => {
    act(() => {
      result.current.sendFromExchangeToWallet(0.1);
    });
    expect(result.current.exchange).toBe(0.1);
    expect(result.current.wallet).toBe(0.5);
  });

  it('sends amount from wallet to exchange', () => {
    act(() => {
      result.current.sendFromWalletToExchange(0.1);
    });
    expect(result.current.wallet).toBe(0.5);
    expect(result.current.exchange).toBe(0.1);
  });
});
