import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Exchange from './Exchange';
import { AccountManagerProvider } from './context/AccountManager.context';

describe('Exchange', () => {
  it('renders VisualComponent with correct title', () => {
    render(
      <AccountManagerProvider>
        <Exchange />
      </AccountManagerProvider>
    );
    expect(screen.getByText('Exchange')).toBeInTheDocument();
  });

  it('renders ExchangeAccount component', () => {
    render(
      <AccountManagerProvider>
        <Exchange />
      </AccountManagerProvider>
    );
    expect(screen.getByText('Exchange account')).toBeInTheDocument();
  });
});
