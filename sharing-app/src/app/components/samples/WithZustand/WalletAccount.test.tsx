import { render, screen, fireEvent } from '@testing-library/react';
import WalletAccount from './WalletAccount';
import { useAmountsStore } from './store/useAmountsStore';

jest.mock('./store/useAmountsStore');

const mockedUseAmountsStore = useAmountsStore as unknown as jest.Mock;

describe('WalletAccount', () => {
  const mockSendFromWalletToExchange = jest.fn();

  const mockState = {
    wallet: 100,
    sendFromWalletToExchange: mockSendFromWalletToExchange,
  };

  beforeEach(() => {
    mockedUseAmountsStore.mockImplementation((selector) => selector(mockState));
    mockSendFromWalletToExchange.mockClear();
  });

  it('renders correctly', () => {
    render(<WalletAccount />);
    expect(screen.getByText('Wallet account')).toBeInTheDocument();
    expect(screen.getByText('Amount: 100')).toBeInTheDocument();
  });

  it('calls sendFromWalletToExchange on AccountBox click', () => {
    render(<WalletAccount />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockSendFromWalletToExchange).toHaveBeenCalled();
  });
});
