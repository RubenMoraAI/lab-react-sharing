import { render, screen, fireEvent } from '@testing-library/react';
import { useShareOptionContext } from '@src/context/ShareOption.context';
import { SharingSelector } from './SharingSelector';
import { sharingOptions } from './data/sharingOptions.data';

jest.mock('@src/context/ShareOption.context', () => ({
  useShareOptionContext: jest.fn(),
}));

describe('SharingSelector', () => {
  const setShareOptionContextValue = jest.fn();
  const shareOptionContextValue = 'props';

  beforeEach(() => {
    (useShareOptionContext as jest.Mock).mockReturnValue({
      shareOptionContextValue: 'props',
      setShareOptionContextValue,
    });
  });

  it('should render all sharing options', () => {
    render(<SharingSelector />);
    sharingOptions.forEach(({ value }) => {
      const button = screen.getByText(value);
      expect(button).toBeInTheDocument();
    });
  });

  it('should call setShareOptionContextValue with the correct value when a button is clicked', () => {
    render(<SharingSelector />);
    sharingOptions.forEach(({ value }) => {
      const button = screen.getByText(value);
      fireEvent.click(button);
      expect(setShareOptionContextValue).toHaveBeenCalledWith(value);
    });
  });

  it('should apply the correct class to the selected button', () => {
    render(<SharingSelector />);

    const buttons = screen.getAllByRole('button');

    sharingOptions.forEach(({ value }) => {
      const button = buttons.find(btn => btn.textContent?.includes(value));

      if (!button) {
        throw new Error(`Button with value "${value}" not found`);
      }

      if (value === shareOptionContextValue) {
        expect(button.className).toContain('btn-outline-pushed');
      } else {
        expect(button.className).toContain('btn-outline');
        expect(button.className).not.toContain('btn-outline-pushed');
      }
    });
  });
});
