import { renderHook, act } from '@testing-library/react';
import { useAmounts } from './useAmounts';

test('useAmounts hook initial state', () => {
  const { result } = renderHook(() => useAmounts());
  expect(result.current.amounts).toEqual({ exchange: 0.1, wallet: 0.5 });
});

test('useAmounts hook sendFromExchangeToWallet with valid amount', () => {
  const { result } = renderHook(() => useAmounts());
  act(() => {
    result.current.sendFromExchangeToWallet(0.1);
  });
  expect(result.current.amounts).toEqual({ exchange: 0, wallet: 0.6 });
});

test('useAmounts hook sendFromExchangeToWallet with exceeded amount', () => {
  const { result } = renderHook(() => useAmounts());
  act(() => {
    result.current.sendFromExchangeToWallet(0.2);
  });
  expect(result.current.amounts).toEqual({ exchange: 0.1, wallet: 0.5 });
});

test('useAmounts hook sendFromWalletToExchange with valid amount', () => {
  const { result } = renderHook(() => useAmounts());
  act(() => {
    result.current.sendFromWalletToExchange(0.1);
  });
  expect(result.current.amounts).toEqual({ exchange: 0.2, wallet: 0.4 });
});

test('useAmounts hook sendFromWalletToExchange with exceeded amount', () => {
  const { result } = renderHook(() => useAmounts());
  act(() => {
    result.current.sendFromWalletToExchange(0.6);
  });
  expect(result.current.amounts).toEqual({ exchange: 0.1, wallet: 0.5 });
});

test('useAmounts hook sendFromExchangeToWallet with zero amount', () => {
  const { result } = renderHook(() => useAmounts());
  act(() => {
    result.current.sendFromExchangeToWallet(0);
  });
  expect(result.current.amounts).toEqual({ exchange: 0.1, wallet: 0.5 });
});

test('useAmounts hook sendFromWalletToExchange with zero amount', () => {
  const { result } = renderHook(() => useAmounts());
  act(() => {
    result.current.sendFromWalletToExchange(0);
  });
  expect(result.current.amounts).toEqual({ exchange: 0.1, wallet: 0.5 });
});

test('useAmounts hook sendFromExchangeToWallet with negative amount', () => {
  const { result } = renderHook(() => useAmounts());
  act(() => {
    result.current.sendFromExchangeToWallet(-0.1);
  });
  expect(result.current.amounts).toEqual({ exchange: 0.1, wallet: 0.5 });
});

test('useAmounts hook sendFromWalletToExchange with negative amount', () => {
  const { result } = renderHook(() => useAmounts());
  act(() => {
    result.current.sendFromWalletToExchange(-0.1);
  });
  expect(result.current.amounts).toEqual({ exchange: 0.1, wallet: 0.5 });
});
