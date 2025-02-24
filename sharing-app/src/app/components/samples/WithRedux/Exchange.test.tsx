import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Exchange from './Exchange';

test('renders Exchange component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Exchange />
    </Provider>
  );
  expect(getByText('Exchange')).toBeInTheDocument();
});
