import { render, screen } from '@testing-library/react';
import Exchange from './Exchange';

test('renders Exchange component', () => {
  render(<Exchange>Test Child</Exchange>);
  expect(screen.getByText('Exchange')).toBeInTheDocument();
  expect(screen.getByText('Test Child')).toBeInTheDocument();
});
