import { render, screen, fireEvent } from '@testing-library/react';
import ExchangeAccount, { ExchangeAccountProps } from './ExchangeAccount';

describe('ExchangeAccount', () => {
  const defaultProps: ExchangeAccountProps = {
    exchangeAmount: 100,
    sendFromExchangeToWallet: jest.fn(),
  };

  it('renders correctly', () => {
    render(<ExchangeAccount {...defaultProps} />);
    expect(screen.getByText('Exchange Account')).toBeInTheDocument();
    expect(screen.getByText('Amount: 100')).toBeInTheDocument();
  });

  it('calls sendFromExchangeToWallet on AccountBox click', () => {
    render(<ExchangeAccount {...defaultProps} />);
    fireEvent.click(screen.getByRole('button'));
    expect(defaultProps.sendFromExchangeToWallet).toHaveBeenCalled();
  });
});
