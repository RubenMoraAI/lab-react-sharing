import { render, screen } from '@testing-library/react';
import Exchange from './Exchange';

const props = {
  exchangeAmount: 0.1,
  sendFromExchangeToWallet: jest.fn(),
};

test('renders Exchange component', () => {
  render(<Exchange {...props} />);
  expect(screen.getByText('Exchange')).toBeInTheDocument();
  expect(screen.getByText('Exchange account')).toBeInTheDocument();
  expect(screen.getByText('Amount: 0.1')).toBeInTheDocument();
});
