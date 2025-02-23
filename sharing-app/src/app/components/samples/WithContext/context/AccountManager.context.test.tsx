import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AccountManagerProvider, useAccountManagerContext } from './AccountManager.context';

describe('AccountManagerContext', () => {
  it('should provide default values', () => {
    const TestComponent = () => {
      const { accountManagerContextValue } = useAccountManagerContext();
      return (
        <div>
          <span>Exchange: {accountManagerContextValue.exchange}</span>
          <span>Wallet: {accountManagerContextValue.wallet}</span>
        </div>
      );
    };

    render(
      <AccountManagerProvider>
        <TestComponent />
      </AccountManagerProvider>
    );

    expect(screen.getByText('Exchange: 0.1')).toBeInTheDocument();
    expect(screen.getByText('Wallet: 0.5')).toBeInTheDocument();
  });

  it('should update context values', async () => {
    const TestComponent = () => {
      const { accountManagerContextValue, setAccountManagerContextValue } = useAccountManagerContext();
      return (
        <div>
          <span>Exchange: {accountManagerContextValue.exchange}</span>
          <span>Wallet: {accountManagerContextValue.wallet}</span>
          <button onClick={() => setAccountManagerContextValue({ exchange: 0.2, wallet: 0.6 })}>Update</button>
        </div>
      );
    };

    render(
      <AccountManagerProvider>
        <TestComponent />
      </AccountManagerProvider>
    );

    expect(screen.getByText('Exchange: 0.1')).toBeInTheDocument();
    expect(screen.getByText('Wallet: 0.5')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Update'));

    await waitFor(() => {
      expect(screen.getByText('Exchange: 0.2')).toBeInTheDocument();
      expect(screen.getByText('Wallet: 0.6')).toBeInTheDocument();
    });
  });

  it('should throw an error if used outside of AccountManagerProvider', () => {
    const TestComponent = () => {
      useAccountManagerContext();
      return null;
    };

    const originalError = console.error;
    console.error = jest.fn();

    expect(() => render(<TestComponent />)).toThrow('AccountManagerContext must be used within a AccountManagerProvider');

    console.error = originalError;
  });
});
