import React from 'react';
import { render, screen } from '@testing-library/react';

import { ShareOptionContext } from '../context/ShareOption.context';
import HomePage from './page';

jest.mock('./components/layout/data/sharingOptions.data', () => ({
  componentsByShareOption: {
    validKey: <div data-testid="mock-component">Valid Component</div>,
  },
  ComponentsByShareOptionKey: {
    validKey: 'validKey',
  }
}));

describe('HomePage Component', () => {
  const renderWithContext = (contextValue: string) => {
    return render(
      <ShareOptionContext.Provider
        value={{ shareOptionContextValue: contextValue, setShareOptionContextValue: jest.fn() }}
      >
        <HomePage />
      </ShareOptionContext.Provider>
    );
  };

  test('renders the correct component when shareOptionContextValue is valid', () => {
    renderWithContext('validKey');
    expect(screen.getByTestId('mock-component')).toBeInTheDocument();
  });

  test('renders fallback message when shareOptionContextValue is invalid', () => {
    renderWithContext('invalidKey');
    expect(
      screen.getByText('Sharing data option not found, please check the original list')
    ).toBeInTheDocument();
  });

  test('renders without crashing', () => {
    renderWithContext('validKey');
  });
});
