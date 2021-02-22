import styled from 'styled-components';
import { memo } from 'react';
import { pxToRem } from 'utils/theme';

interface ButtonProps {
  fullWidth?: boolean;
}

export default styled.button<ButtonProps>`
  background: ${({ theme }) =>
    `linear-gradient(267.79deg, ${theme.colors.secondaryColor} 0%, ${theme.colors.accentColor} 99.18%)`};
  border: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 25px #cf99db;
  text-transform: uppercase;
  border-radius: ${pxToRem(8)};
  height: ${pxToRem(48)};
  ${({ fullWidth }) => fullWidth && `width: 100%`};
  font-weight: 600;
  font-size: ${pxToRem(16)};
  color: #fff;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 15px 30px #cf99db;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 6px 20px #cf99db;
  }
  &:disabled {
    opacity: 0.6;
  }
`;
