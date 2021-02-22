const remSizing = 16;

export interface BreakpointsType {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export const breakpoints: BreakpointsType = {
  xs: '0px',
  sm: '768px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
};

export const pxToRem = (px: number) => `${(px / remSizing).toFixed(2)}rem`;

export const spacings = [0, 0.125, 0.25, 0.5, 1, 2, 4];

export const getBreakpoint = (range: keyof BreakpointsType) => ({
  up: `(min-width: ${breakpoints[range]})`,
  down: `(max-width: ${breakpoints[range]})`
});

export const getSpacing = (index: number) => `${spacings[index]}rem`;

export default {
  colors: {
    primaryColor: '#989FDB',
    secondaryColor: '#383E71',
    accentColor: '#9D25B0',
    lavender: '#FAF5FF',
    red: '#FF377F'
  },
  fontFamily: 'Montserrat',
  fontSizes: {
    extraSmall: pxToRem(12),
    small: pxToRem(14),
    medium: pxToRem(18),
    large: pxToRem(40)
  }
};
