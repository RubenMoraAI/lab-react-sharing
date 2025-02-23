import { render, screen, fireEvent } from '@testing-library/react';
import AccountBox from './AccountBox';

describe('AccountBox', () => {
  const onClickMock = jest.fn();

  beforeEach(() => {
    render(<AccountBox onClick={onClickMock} />);
  });

  it('should render the input and button', () => {
    const input = screen.getByPlaceholderText('Amount...');
    const button = screen.getByText('Send');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should call onClick with the correct amount when button is clicked', () => {
    const input = screen.getByPlaceholderText('Amount...');
    fireEvent.change(input, { target: { value: '0.02000000' } });
    const button = screen.getByText('Send');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledWith(0.02);
  });

  it('should call onClick with the correct amount when Enter key is pressed', () => {
    const input = screen.getByPlaceholderText('Amount...');
    fireEvent.change(input, { target: { value: '0.02000000' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(onClickMock).toHaveBeenCalledWith(0.02);
  });

  it('should format the amount correctly on blur', () => {
    const input = screen.getByPlaceholderText('Amount...');
    fireEvent.change(input, { target: { value: '0.02000000' } });
    fireEvent.blur(input);
    expect(input).toHaveValue(0.02);
  });

  it('should set amount to 0.00000000 if input is invalid on blur', () => {
    const input = screen.getByPlaceholderText('Amount...');
    fireEvent.change(input, { target: { value: 'invalid' } });
    fireEvent.blur(input);
    expect(input).toHaveValue(0.0);
  });
});
