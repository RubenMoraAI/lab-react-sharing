import { render, screen, fireEvent } from '@testing-library/react';
import ExchangeAccount, { ExchangeAccountProps } from './ExchangeAccount';

test('renders ExchangeAccount component', () => {
  const props: ExchangeAccountProps = {
    exchangeAmount: 0.1,
    sendFromExchangeToWallet: jest.fn(),
  };
  render(<ExchangeAccount {...props} />);
  expect(screen.getByText('Exchange account')).toBeInTheDocument();
  expect(screen.getByText('Amount: 0.1')).toBeInTheDocument();
});

test('calls sendFromExchangeToWallet on button click', () => {
  const props: ExchangeAccountProps = {
    exchangeAmount: 0.1,
    sendFromExchangeToWallet: jest.fn(),
  };
  render(<ExchangeAccount {...props} />);
  fireEvent.click(screen.getByRole('button'));
  expect(props.sendFromExchangeToWallet).toHaveBeenCalled();
});
