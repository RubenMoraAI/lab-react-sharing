import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ExchangeAccount from './ExchangeAccount';

test('renders ExchangeAccount component and handles click event', () => {
  const { getByText } = render(
    <Provider store={store}>
      <ExchangeAccount />
    </Provider>
  );
  expect(getByText('Exchange account')).toBeInTheDocument();
  fireEvent.click(getByText('Send'));
  expect(getByText((content) => content.startsWith('Amount:'))).toHaveTextContent('Amount: 0.0');
});
