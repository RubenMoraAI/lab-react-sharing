import { render, screen, fireEvent } from '@testing-library/react';
import ExchangeAccount from './ExchangeAccount';

const mockSendFromExchangeToWallet = jest.fn();

const props = {
  exchangeAmount: 0.1,
  sendFromExchangeToWallet: mockSendFromExchangeToWallet,
};

test('renders ExchangeAccount component', () => {
  render(<ExchangeAccount {...props} />);
  expect(screen.getByText('Exchange account')).toBeInTheDocument();
  expect(screen.getByText('Amount: 0.1')).toBeInTheDocument();
});

test('calls sendFromExchangeToWallet on button click', () => {
  render(<ExchangeAccount {...props} />);
  fireEvent.click(screen.getByRole('button'));
  expect(mockSendFromExchangeToWallet).toHaveBeenCalled();
});
