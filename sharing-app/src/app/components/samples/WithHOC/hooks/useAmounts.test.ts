import { renderHook, act } from '@testing-library/react';
import { useAmounts } from './useAmounts';

test('useAmounts hook initial state', () => {
  const { result } = renderHook(() => useAmounts());
  expect(result.current.amounts).toEqual({ exchange: 0.1, wallet: 0.5 });
});

test('useAmounts hook sendFromExchangeToWallet', () => {
  const { result } = renderHook(() => useAmounts());
  act(() => {
    result.current.sendFromExchangeToWallet(0.1);
  });
  expect(result.current.amounts).toEqual({ exchange: 0, wallet: 0.6 });
});

test('useAmounts hook sendFromWalletToExchange', () => {
  const { result } = renderHook(() => useAmounts());
  act(() => {
    result.current.sendFromWalletToExchange(0.1);
  });
  expect(result.current.amounts).toEqual({ exchange: 0.2, wallet: 0.4 });
});
