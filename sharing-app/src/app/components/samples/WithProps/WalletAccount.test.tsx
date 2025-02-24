import { render, screen, fireEvent } from '@testing-library/react';
import WalletAccount from './WalletAccount';

const mockSendFromWalletToExchange = jest.fn();

const props = {
  walletAmount: 0.5,
  sendFromWalletToExchange: mockSendFromWalletToExchange,
};

test('renders WalletAccount component', () => {
  render(<WalletAccount {...props} />);
  expect(screen.getByText('Wallet account')).toBeInTheDocument();
  expect(screen.getByText('Amount: 0.5')).toBeInTheDocument();
});

test('calls sendFromWalletToExchange on button click', () => {
  render(<WalletAccount {...props} />);
  fireEvent.click(screen.getByRole('button'));
  expect(mockSendFromWalletToExchange).toHaveBeenCalled();
});
