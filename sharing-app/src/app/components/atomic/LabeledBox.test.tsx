import { render, screen } from '@testing-library/react';
import { LabeledBox } from './LabeledBox';

describe('LabeledBox', () => {
  it('should render the label', () => {
    render(<LabeledBox label="Test Label" />);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
  });

  it('should render the children', () => {
    render(
      <LabeledBox label="Test Label">
        <div>Child Content</div>
      </LabeledBox>
    );
    const childContent = screen.getByText('Child Content');
    expect(childContent).toBeInTheDocument();
  });

  it('should render both label and children', () => {
    render(
      <LabeledBox label="Test Label">
        <div>Child Content</div>
      </LabeledBox>
    );
    const label = screen.getByText('Test Label');
    const childContent = screen.getByText('Child Content');
    expect(label).toBeInTheDocument();
    expect(childContent).toBeInTheDocument();
  });
});
