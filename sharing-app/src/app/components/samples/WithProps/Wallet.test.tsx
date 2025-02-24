import { render, screen } from '@testing-library/react';
import Wallet from './Wallet';

const props = {
  walletAmount: 0.5,
  sendFromWalletToExchange: jest.fn(),
};

test('renders Wallet component', () => {
  render(<Wallet {...props} />);
  expect(screen.getByText('Wallet')).toBeInTheDocument();
  expect(screen.getByText('Wallet account')).toBeInTheDocument();
  expect(screen.getByText('Amount: 0.5')).toBeInTheDocument();
});
