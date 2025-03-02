import { renderHook, act } from '@testing-library/react';
import { useAmounts } from './useAmounts';
import { rxjsShareSubject } from './subjects/rxjsShareSubject';
import { Subscription } from 'rxjs';

describe('useAmounts', () => {
  it('should initialize with the correct amount', () => {
    const { result } = renderHook(() => useAmounts(100, 'wallet'));
    expect(result.current.amount).toBe(100);
  });

  it('should update wallet amount when receiving new value', () => {
    const { result } = renderHook(() => useAmounts(100, 'wallet'));
    act(() => {
      rxjsShareSubject.setSubject({ wallet: 50, exchange: 0 });
    });
    expect(result.current.amount).toBe(150);
  });

  it('should update exchange amount when receiving new value', () => {
    const { result } = renderHook(() => useAmounts(100, 'exchange'));
    act(() => {
      rxjsShareSubject.setSubject({ wallet: 0, exchange: 50 });
    });
    expect(result.current.amount).toBe(150);
  });

  it('should not update wallet amount when receiving zero or negative value', () => {
    const { result } = renderHook(() => useAmounts(100, 'wallet'));
    act(() => {
      rxjsShareSubject.setSubject({ wallet: 0, exchange: 0 });
    });
    expect(result.current.amount).toBe(100);

    act(() => {
      rxjsShareSubject.setSubject({ wallet: -50, exchange: 0 });
    });
    expect(result.current.amount).toBe(100);
  });

  it('should not update exchange amount when receiving zero or negative value', () => {
    const { result } = renderHook(() => useAmounts(100, 'exchange'));
    act(() => {
      rxjsShareSubject.setSubject({ wallet: 0, exchange: 0 });
    });
    expect(result.current.amount).toBe(100);

    act(() => {
      rxjsShareSubject.setSubject({ wallet: 0, exchange: -50 });
    });
    expect(result.current.amount).toBe(100);
  });

  it('should send amount to exchange from wallet', () => {
    const { result } = renderHook(() => useAmounts(100, 'wallet'));
    act(() => {
      result.current.sendToExchangeFromWallet(50);
    });
    expect(result.current.amount).toBe(50);
  });

  it('should not send amount to exchange from wallet if amount is greater than wallet amount', () => {
    const { result } = renderHook(() => useAmounts(100, 'wallet'));
    act(() => {
      result.current.sendToExchangeFromWallet(150);
    });
    expect(result.current.amount).toBe(100);
  });

  it('should send amount to wallet from exchange', () => {
    const { result } = renderHook(() => useAmounts(100, 'exchange'));
    act(() => {
      result.current.sendToWalletFromExchange(50);
    });
    expect(result.current.amount).toBe(50);
  });

  it('should not send amount to wallet from exchange if amount is greater than exchange amount', () => {
    const { result } = renderHook(() => useAmounts(100, 'exchange'));
    act(() => {
      result.current.sendToWalletFromExchange(150);
    });
    expect(result.current.amount).toBe(100);
  });

  it('should unsubscribe from observable on unmount', () => {
    const unsubscribeSpy = jest.fn();
    const mockSubscription = new Subscription();
    jest.spyOn(mockSubscription, 'unsubscribe').mockImplementation(unsubscribeSpy);
    const subscribeSpy = jest.spyOn(rxjsShareSubject.subject$, 'subscribe');
    subscribeSpy.mockReturnValue(mockSubscription);
    const { unmount } = renderHook(() => useAmounts(100, 'wallet'));
    unmount();

    expect(unsubscribeSpy).toHaveBeenCalledTimes(1);
    subscribeSpy.mockRestore();
  });
});
