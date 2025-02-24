import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { ShareOptionProvider, useShareOptionContext } from './ShareOption.context';

const TestComponent = () => {
  const { shareOptionContextValue, setShareOptionContextValue } = useShareOptionContext();
  return (
    <div>
      <span data-testid="value">{shareOptionContextValue}</span>
      <button onClick={() => setShareOptionContextValue('updated')}>Update</button>
    </div>
  );
};

describe('ShareOptionContext', () => {
  test('renders children correctly', () => {
    render(
      <ShareOptionProvider>
        <div data-testid="child">Child Content</div>
      </ShareOptionProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  test('provides default context value', () => {
    render(
      <ShareOptionProvider>
        <TestComponent />
      </ShareOptionProvider>
    );
    expect(screen.getByTestId('value')).toHaveTextContent('props');
  });

  test('updates context value', () => {
    render(
      <ShareOptionProvider>
        <TestComponent />
      </ShareOptionProvider>
    );
    const button = screen.getByText('Update');
    act(() => {
      button.click();
    });
    expect(screen.getByTestId('value')).toHaveTextContent('updated');
  });

  test('throws error when hook is used outside provider', () => {

    const originalError = console.error;
    console.error = jest.fn();

    const FaultyComponent = () => {

      useShareOptionContext();
      return <div>Faulty Component</div>;
    };

    expect(() => render(<FaultyComponent />)).toThrow(
      'ShareOptionContext must be used within a ShareOptionProvider'
    );

    console.error = originalError;
  });
});
