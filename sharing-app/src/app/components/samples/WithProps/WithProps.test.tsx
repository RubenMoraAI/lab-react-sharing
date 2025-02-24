import { render, screen } from '@testing-library/react';
import WithProps from './WithProps';

test('renders WithProps component', () => {
  render(<WithProps />);
  expect(screen.getByText('Blockchain')).toBeInTheDocument();
  expect(screen.getByText('Using Props to share data, this method keeps the data in a common parent and passes it down to all child components through props, even if some do not use it.')).toBeInTheDocument();
});
