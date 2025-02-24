import { render, screen } from '@testing-library/react';
import Wallet from './Wallet';

test('renders Wallet component', () => {
  render(<Wallet>Test Child</Wallet>);
  expect(screen.getByText('Wallet')).toBeInTheDocument();
  expect(screen.getByText('Test Child')).toBeInTheDocument();
});
