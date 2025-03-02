import { render, screen } from '@testing-library/react';
import VisualComponent from './VisualComponent';

describe('VisualComponent', () => {
  it('should render the title', () => {
    render(<VisualComponent title="Test Title" />);
    const title = screen.getByText('Test Title');
    expect(title).toBeInTheDocument();
  });

  it('should render the description if provided', () => {
    render(<VisualComponent title="Test Title" description="Test Description" />);
    const description = screen.getByText('Test Description');
    expect(description).toBeInTheDocument();
  });

  it('should render the amount if provided', () => {
    render(<VisualComponent title="Test Title" amount="100" />);
    const amount = screen.getByText('100');
    expect(amount).toBeInTheDocument();
  });

  it('should render the children if provided', () => {
    render(
      <VisualComponent title="Test Title">
        <div>Child Content</div>
      </VisualComponent>
    );
    const childContent = screen.getByText('Child Content');
    expect(childContent).toBeInTheDocument();
  });

  it('should render the "Rendering" span', () => {
    render(<VisualComponent title="Test Title" />);
    const renderingSpan = screen.getByText('Rendering');
    expect(renderingSpan).toBeInTheDocument();
  });

  it('should render all provided props correctly', () => {
    render(
      <VisualComponent title="Test Title" description="Test Description" amount="100">
        <div>Child Content</div>
      </VisualComponent>
    );
    const title = screen.getByText('Test Title');
    const description = screen.getByText('Test Description');
    const amount = screen.getByText('100');
    const childContent = screen.getByText('Child Content');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
    expect(childContent).toBeInTheDocument();
  });

  it('should render correctly without optional props', () => {
    render(<VisualComponent title="Test Title" />);
    const title = screen.getByText('Test Title');
    const renderingSpan = screen.getByText('Rendering');

    expect(title).toBeInTheDocument();
    expect(renderingSpan).toBeInTheDocument();
  });
  it('should render with only the title and no optional props', () => {
    render(<VisualComponent title="Test Title" />);
    const title = screen.getByText('Test Title');

    expect(screen.queryByText('Test Description')).not.toBeInTheDocument();
    expect(screen.queryByText('100')).not.toBeInTheDocument();
    expect(screen.queryByText('Child Content')).not.toBeInTheDocument();

    expect(title).toBeInTheDocument();
  });
  it('should render correctly without children', () => {
    render(<VisualComponent title="Test Title" description="Test Description" amount="100" />);
    const title = screen.getByText('Test Title');
    const description = screen.getByText('Test Description');
    const amount = screen.getByText('100');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(amount).toBeInTheDocument();

    expect(screen.queryByText('Child Content')).not.toBeInTheDocument();
  });
  
});
