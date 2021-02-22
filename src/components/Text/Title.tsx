import { pxToRem, getSpacing } from 'utils/theme';
import styled from 'styled-components';

export default styled.h1`
  font-size: ${pxToRem(40)};
  ${({ color, theme }) => `color: ${color || theme.colors.secondaryColor}`};
  font-weight: 400;
  margin-bottom: ${getSpacing(4)};
  ${({ theme }) => `font-family: ${theme.fontFamily}`};
`;
