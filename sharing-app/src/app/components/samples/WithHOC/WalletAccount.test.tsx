import { render, screen, fireEvent } from '@testing-library/react';
import WalletAccount, { WalletAccountProps } from './WalletAccount';

test('renders WalletAccount component', () => {
  const props: WalletAccountProps = {
    walletAmount: 0.5,
    sendFromWalletToExchange: jest.fn(),
  };
  render(<WalletAccount {...props} />);
  expect(screen.getByText('Wallet account')).toBeInTheDocument();
  expect(screen.getByText('Amount: 0.5')).toBeInTheDocument();
});

test('calls sendFromWalletToExchange on button click', () => {
  const props: WalletAccountProps = {
    walletAmount: 0.5,
    sendFromWalletToExchange: jest.fn(),
  };
  render(<WalletAccount {...props} />);
  fireEvent.click(screen.getByRole('button'));
  expect(props.sendFromWalletToExchange).toHaveBeenCalled();
});
