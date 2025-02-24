import { render, act } from '@testing-library/react';
import { Exchange } from './Exchange';
import { Wallet } from './Wallet';
import WithStateLifting from '.';

jest.mock('./Exchange', () => ({
  Exchange: jest.fn(() => null),
}));
jest.mock('./Wallet', () => ({
  Wallet: jest.fn(() => null),
}));

describe('WithStateLifting', () => {
  beforeEach(() => {
    (Exchange as jest.Mock).mockClear();
    (Wallet as jest.Mock).mockClear();
  });

  test('renders with correct initial amounts', () => {
    render(<WithStateLifting />);

    expect(Exchange).toHaveBeenCalledWith(
      expect.objectContaining({
        exchangeAmount: 0.1,
        sendFromExchangeToWallet: expect.any(Function),
      }),
      expect.anything()
    );

    expect(Wallet).toHaveBeenCalledWith(
      expect.objectContaining({
        walletAmount: 0.5,
        sendFromWalletToExchange: expect.any(Function),
      }),
      expect.anything()
    );
  });

  test('updates amounts when sending from Exchange to Wallet with valid amount', () => {
    render(<WithStateLifting />);

    const initialExchangeProps = (Exchange as jest.Mock).mock.calls[0][0];

    act(() => {
      initialExchangeProps.sendFromExchangeToWallet(0.05);
    });

    const updatedExchangeProps = (Exchange as jest.Mock).mock.calls[1][0];
    const updatedWalletProps = (Wallet as jest.Mock).mock.calls[1][0];

    expect(updatedExchangeProps.exchangeAmount).toBe(0.05);
    expect(updatedWalletProps.walletAmount).toBe(0.55);
  });

  test('does not update amounts when sending from Exchange to Wallet with exceeded amount', () => {
    render(<WithStateLifting />);

    const initialExchangeProps = (Exchange as jest.Mock).mock.calls[0][0];

    act(() => {
      initialExchangeProps.sendFromExchangeToWallet(0.2);
    });

    expect(Exchange).toHaveBeenCalledTimes(1);
    expect(Wallet).toHaveBeenCalledTimes(1);
  });

  test('updates amounts when sending from Wallet to Exchange with valid amount', () => {
    render(<WithStateLifting />);

    const initialWalletProps = (Wallet as jest.Mock).mock.calls[0][0];

    act(() => {
      initialWalletProps.sendFromWalletToExchange(0.3);
    });

    const updatedExchangeProps = (Exchange as jest.Mock).mock.calls[1][0];
    const updatedWalletProps = (Wallet as jest.Mock).mock.calls[1][0];

    expect(updatedExchangeProps.exchangeAmount).toBe(0.4);
    expect(updatedWalletProps.walletAmount).toBe(0.2);
  });

  test('does not update amounts when sending from Wallet to Exchange with exceeded amount', () => {
    render(<WithStateLifting />);

    const initialWalletProps = (Wallet as jest.Mock).mock.calls[0][0];

    act(() => {
      initialWalletProps.sendFromWalletToExchange(0.6);
    });

    expect(Wallet).toHaveBeenCalledTimes(1);
    expect(Exchange).toHaveBeenCalledTimes(1);
  });
});
