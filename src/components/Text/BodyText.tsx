import { pxToRem } from 'utils/theme';
import styled from 'styled-components';

export default styled.p`
  font-size: ${pxToRem(14)};
  ${({ color, theme }) => `color: ${color || theme.colors.primaryColor}`}
`;
