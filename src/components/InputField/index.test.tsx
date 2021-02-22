import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import InputField from '.';

describe('InputField test section', () => {
  it('should render an input field', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <InputField />
      </ThemeProvider>
    );

    expect(getByTestId('input-field')).toBeInTheDocument();
  });

  it('should receive an initial value', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <InputField initialValue="text" />
      </ThemeProvider>
    );
    expect(getByTestId('input-field')).toHaveValue('text');
  });

  it('can optionally receive an onChange function with the value as argument', () => {
    const mockHandleChange = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <InputField onChange={mockHandleChange} />
      </ThemeProvider>
    );

    fireEvent.change(getByTestId('input-field'), {
      target: { value: 'text' }
    });
    expect(mockHandleChange).toHaveBeenCalledWith('text');
  });

  it('can optionally receive a validate function with the value as argument', () => {
    const mockValidate = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <InputField validate={mockValidate} />
      </ThemeProvider>
    );

    fireEvent.change(getByTestId('input-field'), {
      target: { value: 'text' }
    });
    fireEvent.blur(getByTestId('input-field'));

    expect(mockValidate).toHaveBeenCalledWith('text');
  });
});
