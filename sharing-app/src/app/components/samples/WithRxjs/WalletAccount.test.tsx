import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import WalletAccount from './WalletAccount';

test('renders WalletAccount component and handles click event', async () => {
  render(<WalletAccount />);
  expect(screen.getByText('Wallet account')).toBeInTheDocument();
  expect(screen.getByText('Amount: 0.50')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Send'));
  await waitFor(() => expect(screen.getByText('Amount: 0.50')).toBeInTheDocument());
});
