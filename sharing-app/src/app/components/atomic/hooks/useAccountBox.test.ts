import { renderHook, act } from '@testing-library/react';
import { useAccountBox } from './useAccountBox';
import { ChangeEvent, KeyboardEvent, FocusEvent } from 'react';
import { AccountManagerProvider } from '../../samples/WithContext/context/AccountManager.context';

describe('useAccountBox', () => {
  it('should initialize with default amount', () => {
    const { result } = renderHook(() => useAccountBox({ onClick: jest.fn() }), {
      wrapper: AccountManagerProvider,
    });
    expect(result.current.amount).toBe('0.01000000');
  });

  it('should update amount on handleOnChange', () => {
    const { result } = renderHook(() => useAccountBox({ onClick: jest.fn() }), {
      wrapper: AccountManagerProvider,
    });
    act(() => {
      result.current.handleOnChange({ target: { value: '0.02000000' } } as ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.amount).toBe('0.02000000');
  });

  it('should call onClick with correct amount on handleClick', () => {
    const onClickMock = jest.fn();
    const { result } = renderHook(() => useAccountBox({ onClick: onClickMock }), {
      wrapper: AccountManagerProvider,
    });
    act(() => {
      result.current.handleClick();
    });
    expect(onClickMock).toHaveBeenCalledWith(0.01);
  });

  it('should call onClick with correct amount on Enter key press', () => {
    const onClickMock = jest.fn();
    const { result } = renderHook(() => useAccountBox({ onClick: onClickMock }), {
      wrapper: AccountManagerProvider,
    });
    act(() => {
      result.current.handleEnter({ key: 'Enter' } as KeyboardEvent<HTMLInputElement>);
    });
    expect(onClickMock).toHaveBeenCalledWith(0.01);
  });

  it('should format amount correctly on handleBlur', () => {
    const { result } = renderHook(() => useAccountBox({ onClick: jest.fn() }), {
      wrapper: AccountManagerProvider,
    });
    act(() => {
      result.current.handleBlur({ target: { value: '0.02000000' } } as FocusEvent<HTMLInputElement>);
    });
    expect(result.current.amount).toBe('0.02000000');
  });

  it('should set amount to 0.00000000 if input is invalid on handleBlur', () => {
    const { result } = renderHook(() => useAccountBox({ onClick: jest.fn() }), {
      wrapper: AccountManagerProvider,
    });
    act(() => {
      result.current.handleBlur({ target: { value: 'invalid' } } as FocusEvent<HTMLInputElement>);
    });
    expect(result.current.amount).toBe('0.00000000');
  });
});
