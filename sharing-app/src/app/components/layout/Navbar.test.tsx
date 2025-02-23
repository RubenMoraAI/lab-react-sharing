import { render, screen } from '@testing-library/react';
import Navbar, { menu } from './Navbar';

describe('Navbar', () => {
  it('should render the navbar', () => {
    render(<Navbar />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });

  it('should render the website link with the correct URL', () => {
    render(<Navbar />);
    const websiteLink = screen.getByText('Ruben Mora').closest('a');
    expect(websiteLink).toHaveAttribute('href', process.env.NEXT_PUBLIC_WEBSITE_URL || '/');
  });

  it('should render all menu items', () => {
    render(<Navbar />);
    menu.forEach((item) => {
      const menuItem = screen.getByText(item.title).closest('a');
      expect(menuItem).toHaveAttribute('href', item.url);
    });
  });

  it('should render the correct icons for each menu item', () => {
    render(<Navbar />);
    menu.forEach((item) => {
      const menuItem = screen.getByText(item.title).closest('a');
      const icon = screen.getByTestId(`icon-${item.title}`);
      expect(menuItem).toContainElement(icon);
    });
  });
});
