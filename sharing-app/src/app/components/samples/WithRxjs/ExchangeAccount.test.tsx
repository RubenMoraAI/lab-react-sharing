import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ExchangeAccount from './ExchangeAccount';

test('renders ExchangeAccount component and handles click event', async () => {
  const { container } = render(<ExchangeAccount />);
  console.log(container.innerHTML); // Log the rendered output for debugging
  expect(screen.getByText('Exchange account')).toBeInTheDocument();
  expect(screen.getByText('Amount: 0.1')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Send'));
  await waitFor(() => expect(screen.getByText('Amount: 0.1')).toBeInTheDocument());
});
