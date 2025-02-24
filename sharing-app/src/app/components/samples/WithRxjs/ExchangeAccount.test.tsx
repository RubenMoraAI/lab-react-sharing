import { render, screen, fireEvent } from '@testing-library/react';
import ExchangeAccount from './ExchangeAccount';

test('renders ExchangeAccount component and handles click event', () => {
  render(<ExchangeAccount />);
  expect(screen.getByText('Exchange account')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Send'));
  expect(screen.getByText('Amount: 0.09')).toBeInTheDocument();
});
