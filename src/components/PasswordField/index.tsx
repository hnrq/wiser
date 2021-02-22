import { FC } from 'react';
import TextField from 'components/TextField';
import { InputFieldProps } from 'components/InputField';
import useToggle from 'hooks/useToggle';
import styled from 'styled-components';
import IconButton from 'components/Button/IconButton';
import { Eye, EyeOff } from 'react-feather';

type PasswordFieldProps = {
  label?: string;
} & InputFieldProps;

const PasswordField: FC<PasswordFieldProps> = ({ label, ...restProps }) => {
  const [visible, toggleVisibility] = useToggle();

  return (
    <TextField
      name="password-field"
      {...restProps}
      endAdornment={(
        <IconButton onClick={toggleVisibility} data-testid="visibility-button">
          {visible ? <Eye /> : <EyeOff />}
        </IconButton>
      )}
      label={label}
      type={visible ? 'text' : 'password'}
    />
);
};

export default PasswordField;
