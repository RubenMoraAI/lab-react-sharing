import { render, screen } from '@testing-library/react';
import WithHOC from './WithHOC';

test('renders WithHOC component', () => {
  render(<WithHOC />);
  expect(screen.getByText('Blockchain')).toBeInTheDocument();
  expect(screen.getByText('Using HOC to share data, this method keeps the data in a common parent and wraps child components to provide access to specific components, injecting data through props.')).toBeInTheDocument();
  expect(screen.getByText('Exchange account')).toBeInTheDocument();
  expect(screen.getByText('Wallet account')).toBeInTheDocument();
});
