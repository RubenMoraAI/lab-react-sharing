import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { WalletAccount } from './WalletAccount';

test('renders WalletAccount component and handles click event', () => {
  const { getByText } = render(
    <Provider store={store}>
      <WalletAccount />
    </Provider>
  );
  expect(getByText('Wallet account')).toBeInTheDocument();
  fireEvent.click(getByText('Send'));
  expect(getByText((content) => content.startsWith('Amount:'))).toHaveTextContent('Amount: 0.4');
});
