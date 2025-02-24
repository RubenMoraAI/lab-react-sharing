import { render, screen } from '@testing-library/react';
import Exchange from './Exchange';

describe('Exchange', () => {
  it('renders Exchange component', () => {
    render(<Exchange />);
    expect(screen.getByText('Exchange')).toBeInTheDocument();
  });
});
