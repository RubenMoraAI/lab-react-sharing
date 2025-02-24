import { render, screen, fireEvent } from '@testing-library/react';
import ExchangeAccount from './ExchangeAccount';
import { useAmountsStore } from './store/useAmountsStore';

jest.mock('./store/useAmountsStore');

jest.mock('../../atomic/AccountBox', () => ({
  __esModule: true,
  default: ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick}>Account Box</button>
  ),
}));

describe('ExchangeAccount Component', () => {
  const mockSendFromExchangeToWallet = jest.fn();

  beforeEach(() => {
    (useAmountsStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        exchange: 100,
        sendFromExchangeToWallet: mockSendFromExchangeToWallet,
      })
    );
    mockSendFromExchangeToWallet.mockClear();
  });

  it('correctly displays the exchange amount from the store', () => {
    render(<ExchangeAccount />);

    expect(screen.getByText('Amount: 100')).toBeInTheDocument();
    expect(screen.getByText('Exchange account')).toBeInTheDocument();
  });

  it('calls sendFromExchangeToWallet when AccountBox is clicked', () => {
    render(<ExchangeAccount />);

    const accountBoxButton = screen.getByText('Account Box');
    fireEvent.click(accountBoxButton);

    expect(mockSendFromExchangeToWallet).toHaveBeenCalledTimes(1);
  });
});
