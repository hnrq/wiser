import { FC, InputHTMLAttributes } from 'react';
import useInput from 'hooks/useInput';
import styled from 'styled-components';
import { pxToRem } from 'utils/theme';
import classNames from 'classnames';

export type InputFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  initialValue?: string;
  onChange?: (value: string) => void;
  validate?: (value: string) => boolean;
};

const Input = styled.input`
  border: 0;
  color: ${({ theme }) => theme.colors.secondaryColor};
  flex: 1;
  background: transparent;
  box-sizing: border-box;
  font-family: Montserrat, sans-serif;
  font-size: ${pxToRem(12)};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

const InputField: FC<InputFieldProps> = ({
  className,
  initialValue,
  onChange,
  validate,
  ...restProps
}) => {
  const inputField = useInput(initialValue, {
    handleChange:  onChange,
    validate
  });

  return (
    <Input
      {...inputField}
      className={classNames('input-field', className)}
      {...restProps}
      data-testid="input-field"
    />
  );
};

export default InputField;
