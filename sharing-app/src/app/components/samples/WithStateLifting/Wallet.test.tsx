import { render, screen } from '@testing-library/react';
import Wallet, { WalletProps } from './Wallet';

describe('Wallet', () => {
  const defaultProps: WalletProps = {
    walletAmount: 100,
    sendFromWalletToExchange: jest.fn(),
  };

  it('renders correctly', () => {
    render(<Wallet {...defaultProps} />);
    expect(screen.getByText('Wallet')).toBeInTheDocument();
    expect(screen.getByText('Amount: 100')).toBeInTheDocument();
  });
});
