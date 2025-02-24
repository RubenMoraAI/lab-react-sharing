import { render, screen, fireEvent } from '@testing-library/react';
import WalletAccount, { WalletAccountProps } from './WalletAccount';

describe('WalletAccount', () => {
  const defaultProps: WalletAccountProps = {
    walletAmount: 100,
    sendFromWalletToExchange: jest.fn(),
  };

  it('renders correctly', () => {
    render(<WalletAccount {...defaultProps} />);
    expect(screen.getByText('Wallet Account')).toBeInTheDocument();
    expect(screen.getByText('Amount: 100')).toBeInTheDocument();
  });

  it('calls sendFromWalletToExchange on AccountBox click', () => {
    render(<WalletAccount {...defaultProps} />);
    fireEvent.click(screen.getByRole('button'));
    expect(defaultProps.sendFromWalletToExchange).toHaveBeenCalled();
  });
});
