import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WithContext from './WithContext';

jest.mock('./context/AccountManager.context', () => ({
  AccountManagerProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('./Exchange', () => {
  const Exchange = () => <div>Exchange Component</div>;
  Exchange.displayName = 'Exchange';
  return Exchange;
});

jest.mock('./Wallet', () => {
  const Wallet = () => <div>Wallet Component</div>;
  Wallet.displayName = 'Wallet';
  return Wallet;
});

describe('WithContext', () => {
  it('renders VisualComponent with correct title and description', () => {
    render(<WithContext />);
    expect(screen.getByText('Blockchain')).toBeInTheDocument();
    expect(screen.getByText('With Context, data-sharing logic is encapsulated within a provider. Child components are wrapped by the provider, while only direct consumers implement specific logic.')).toBeInTheDocument();
  });

  it('renders Exchange and Wallet components', () => {
    render(<WithContext />);
    expect(screen.getByText('Exchange Component')).toBeInTheDocument();
    expect(screen.getByText('Wallet Component')).toBeInTheDocument();
  });
});
