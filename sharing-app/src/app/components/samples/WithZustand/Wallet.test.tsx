import { render, screen } from '@testing-library/react';
import Wallet from './Wallet';

describe('Wallet', () => {
  it('renders Wallet component', () => {
    render(<Wallet />);
    expect(screen.getByText('Wallet')).toBeInTheDocument();
  });
});
