import PasswordField from '.';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';

describe('PasswordField section', () => {
  it('renders a visibility toggle button', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <PasswordField />
      </ThemeProvider>
    );
    expect(getByTestId('visibility-button')).toBeInTheDocument();
  });

  it('should toggle password visibility when the toggle button is clicked', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <PasswordField />
      </ThemeProvider>
    );
    expect(getByTestId('input-field').getAttribute('type')).toBe('password');
    fireEvent.click(getByTestId('visibility-button'));
    expect(getByTestId('input-field').getAttribute('type')).toBe('text');
  });
});
