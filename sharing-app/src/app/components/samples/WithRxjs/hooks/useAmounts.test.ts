import { renderHook, act } from '@testing-library/react'
import { useAmounts } from './useAmounts'
import { rxjsShareSubject } from './subjects/rxjsShareSubject'

describe('useAmounts', () => {
  it('should initialize with the correct amount', () => {
    const { result } = renderHook(() => useAmounts(100, 'wallet'))
    expect(result.current.amount).toBe(100)
  })

  it('should update wallet amount when receiving new value', () => {
    const { result } = renderHook(() => useAmounts(100, 'wallet'))
    act(() => {
      rxjsShareSubject.setSubject({ wallet: 50, exchange: 0 })
    })
    expect(result.current.amount).toBe(150)
  })

  it('should update exchange amount when receiving new value', () => {
    const { result } = renderHook(() => useAmounts(100, 'exchange'))
    act(() => {
      rxjsShareSubject.setSubject({ wallet: 0, exchange: 50 })
    })
    expect(result.current.amount).toBe(150)
  })

  it('should send amount to exchange from wallet', () => {
    const { result } = renderHook(() => useAmounts(100, 'wallet'))
    act(() => {
      result.current.sendToExchangeFromWallet(50)
    })
    expect(result.current.amount).toBe(100)
  })

  it('should send amount to wallet from exchange', () => {
    const { result } = renderHook(() => useAmounts(100, 'exchange'))
    act(() => {
      result.current.sendToWalletFromExchange(50)
    })
    expect(result.current.amount).toBe(100)
  })
})
