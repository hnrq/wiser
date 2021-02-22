import {
  pxToRem,
  spacings,
  getSpacing,
  getBreakpoint,
  breakpoints,
  BreakpointsType
} from './theme';

describe('theme test section', () => {
  describe('getBreakpoint test subsection', () => {
    for (const [key, value] of Object.entries(breakpoints)) {
      it(`should return (min-width: ${value}) if ${key} up is provided`, () => {
        expect(getBreakpoint(key as keyof BreakpointsType).up).toBe(
          `(min-width: ${value})`
        );
      });
      it(`should return (max-width: ${value}) if ${key} down is provided`, () => {
        expect(getBreakpoint(key as keyof BreakpointsType).down).toBe(
          `(max-width: ${value})`
        );
      });
    }
  });

  describe('pxToRem test subsection', () => {
    it('should return the provided pixel value divided by base rem', () => {
      expect(pxToRem(32)).toBe('2.00rem');
    });
  });

  describe('getSpacing test subsection', () => {
    for (const [index, spacing] of Object.entries(spacings)) {
      it(`return ${spacing}rem if index ${index} is provided`, () => {
        expect(getSpacing(parseInt(index))).toBe(`${spacing}rem`);
      });
    }
  });
});
