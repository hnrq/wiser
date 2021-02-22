import TextField from '.';
import theme from 'utils/theme';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

describe('TextField test section', () => {
  it('should render a label for the input if provided as prop', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TextField label="label" />
      </ThemeProvider>
    );
    expect(getByTestId('password-label')).toHaveTextContent('label');
  });

  it('should render an adornment at the start if startAdornment is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TextField label="label" startAdornment={<h1>Adornment</h1>} />
      </ThemeProvider>
    );
    expect(getByTestId('start-adornment')).toBeInTheDocument();
  });

  it('should render an adornment at the end if endAdornment is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TextField label="label" endAdornment={<h1>Adornment</h1>} />
      </ThemeProvider>
    );
    expect(getByTestId('end-adornment')).toBeInTheDocument();
  });
});
