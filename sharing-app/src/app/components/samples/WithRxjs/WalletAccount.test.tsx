import { render, screen, fireEvent } from '@testing-library/react';
import WalletAccount from './WalletAccount';

test('renders WalletAccount component and handles click event', () => {
  render(<WalletAccount />);
  expect(screen.getByText('Wallet account')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Send'));
  expect(screen.getByText('Amount: 0.49')).toBeInTheDocument();
});
