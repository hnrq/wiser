import { InputFieldProps } from 'components/InputField';
import { FC, ReactElement, memo, useState } from 'react';
import { pxToRem, getSpacing } from 'utils/theme';
import InputField from 'components/InputField';
import { X as XIcon } from 'react-feather';
import styled from 'styled-components';

interface ValidateType {
  validateMessage: string;
  validateFn: (value: string) => boolean;
}

type TextFieldProps = Omit<InputFieldProps, 'validate'> & {
  label?: string;
  endAdornment?: ReactElement;
  startAdornment?: ReactElement;
  validate?: ValidateType;
};

const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: ${getSpacing(4)};
`;

const StartAdornment = styled.div`
  display: flex;
  align-items: center;
`;

type InputProps = {
  error: boolean;
};

const EndAdornment = styled.div<InputProps>`
  display: flex;
  align-items: center;
  & svg {
    stroke: ${({ theme, error }) => error && theme.colors.red};
  }
`;

const Input = styled.div<InputProps>`
  display: inline-flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: ${getSpacing(3)};
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.red : theme.colors.primaryColor};
  height: ${pxToRem(48)};
  width: ${pxToRem(297)};
`;
const Label = styled.label`
  font-size: ${pxToRem(12)};
  margin-bottom: ${getSpacing(3)};
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-transform: uppercase;
`;

const ErrorMessage = styled.span`
  font-size: ${pxToRem(12)};
  color: ${({ theme }) => theme.colors.red};
`;

const TextField: FC<TextFieldProps> = ({
  label,
  endAdornment,
  startAdornment,
  validate,
  ...restProps
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  return (
    <Field>
      {label && (
        <Label data-testid="password-label" htmlFor="password-field">
          {label}
        </Label>
      )}
      <Input error={Boolean(validate && !isValid)}>
        {startAdornment && (
          <StartAdornment data-testid="start-adornment">
            {startAdornment}
          </StartAdornment>
        )}
        <InputField
          validate={(value) => {
            if (value.length === 0) {
              setIsValid(true);
              return true;
            } else {
              const valid = validate?.validateFn(value);
              setIsValid(valid || false);
              return valid || false;
            }
          }}
          {...restProps}
        />
        {(endAdornment || Boolean(validate && !isValid)) && (
          <EndAdornment
            error={Boolean(validate && !isValid)}
            data-testid="end-adornment"
          >
            {endAdornment}
            {!endAdornment && <XIcon />}
          </EndAdornment>
        )}
      </Input>
      <ErrorMessage>
        {Boolean(!isValid && validate?.validateMessage) &&
          validate?.validateMessage}
      </ErrorMessage>
    </Field>
  );
};

export default memo(
  TextField,
  (prevProps, nextProps) => prevProps.label !== nextProps.label
);
