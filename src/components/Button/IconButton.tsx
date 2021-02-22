import styled from 'styled-components';
import { pxToRem } from 'utils/theme';

export default styled.button`
  background: none;
  border: none;
  height: ${pxToRem(28)};
  width: ${pxToRem(28)};
  color: ${({ theme }) => theme.colors.secondaryColor};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  & svg {
    stroke: ${({ theme }) => theme.colors.secondaryColor};
    width: 100%;
  }
`;
