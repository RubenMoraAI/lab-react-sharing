import { render, screen } from '@testing-library/react';
import WithZustand from './index';

describe('WithZustand', () => {
  it('renders WithZustand component', () => {
    render(<WithZustand />);
    expect(screen.getByText('Blockchain')).toBeInTheDocument();
    expect(screen.getByText('Using Zustand to share data, this method keeps the data in a global store and allows components to access it directly. Popular alternative to Redux')).toBeInTheDocument();
  });
});
