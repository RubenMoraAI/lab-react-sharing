import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExchangeAccount from './ExchangeAccount';
import { useAccount } from './hooks/useAccount';

jest.mock('./hooks/useAccount');

const mockUseAccount = useAccount as jest.MockedFunction<typeof useAccount>;

mockUseAccount.mockReturnValue({
  sendFromExchangeToWallet: jest.fn(),
  sendFromWalletToExchange: jest.fn(),
  accountExchange: 200,
  accountWallet: 0,
});

describe('ExchangeAccount', () => {
  it('renders VisualComponent with correct title and amount', () => {
    render(<ExchangeAccount />);
    expect(screen.getByText('Exchange account')).toBeInTheDocument();
    expect(screen.getByText('Amount: 200')).toBeInTheDocument();
  });

  it('calls sendFromExchangeToWallet when AccountBox is clicked', () => {
    const { sendFromExchangeToWallet } = mockUseAccount();
    render(<ExchangeAccount />);
    fireEvent.click(screen.getByRole('button'));
    expect(sendFromExchangeToWallet).toHaveBeenCalled();
  });
});
