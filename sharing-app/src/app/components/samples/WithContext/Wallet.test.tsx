import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wallet from './Wallet';

jest.mock('./WalletAccount', () => ({
  __esModule: true,
  WalletAccount: () => <div>WalletAccount Component</div>,
}));

describe('Wallet', () => {
  it('renders VisualComponent with correct title', () => {
    render(<Wallet />);
    expect(screen.getByText('Wallet')).toBeInTheDocument();
  });

  it('renders WalletAccount component', () => {
    render(<Wallet />);
    expect(screen.getByText('WalletAccount Component')).toBeInTheDocument();
  });
});
