import { pxToRem } from 'utils/theme';
import styled from 'styled-components';

export default styled.h3`
  font-size: ${pxToRem(16)};
  font-weight: 600;
  margin-top: 0;
  ${({ theme }) => `font-family: ${theme.fontFamily}`};
  ${({ color, theme }) => `color: ${color || theme.colors.primaryColor}`}
`;
