import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WalletAccount from './WalletAccount';
import { useAccount } from './hooks/useAccount';

jest.mock('./hooks/useAccount');

const mockUseAccount = useAccount as jest.MockedFunction<typeof useAccount>;

mockUseAccount.mockReturnValue({
  sendFromWalletToExchange: jest.fn(),
  accountWallet: 100,
  sendFromExchangeToWallet: jest.fn(),
  accountExchange: 0
});

describe('WalletAccount', () => {
  it('renders VisualComponent with correct title and amount', () => {
    render(<WalletAccount />);
    expect(screen.getByText('Wallet account')).toBeInTheDocument();
    expect(screen.getByText('Amount: 100')).toBeInTheDocument();
  });

  it('calls sendFromWalletToExchange when AccountBox is clicked', () => {
    const { sendFromWalletToExchange } = mockUseAccount();
    render(<WalletAccount />);
    fireEvent.click(screen.getByRole('button'));
    expect(sendFromWalletToExchange).toHaveBeenCalled();
  });
});
