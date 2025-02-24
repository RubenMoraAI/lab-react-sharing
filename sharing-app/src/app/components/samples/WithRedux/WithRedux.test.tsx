import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import WithRedux from './WithRedux';

test('renders WithRedux component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <WithRedux />
    </Provider>
  );
  expect(getByText('Blockchain')).toBeInTheDocument();
});
