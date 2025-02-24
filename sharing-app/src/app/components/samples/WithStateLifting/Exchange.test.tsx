import { render, screen } from '@testing-library/react';
import Exchange, { ExchangeProps } from './Exchange';

describe('Exchange', () => {
  const defaultProps: ExchangeProps = {
    exchangeAmount: 100,
    sendFromExchangeToWallet: jest.fn(),
  };

  it('renders correctly', () => {
    render(<Exchange {...defaultProps} />);
    expect(screen.getByText('Exchange')).toBeInTheDocument();
    expect(screen.getByText('Amount: 100')).toBeInTheDocument();
  });
});
