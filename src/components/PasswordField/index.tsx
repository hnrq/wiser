import { FC } from 'react';
import TextField from 'components/TextField';
import { InputFieldProps } from 'components/InputField';
import useToggle from 'hooks/useToggle';
import IconButton from 'components/Button/IconButton';
import { Eye, EyeOff } from 'react-feather';

interface ValidateType {
  validateMessage: string;
  validateFn: (value: string) => boolean;
}

type PasswordFieldProps = {
  label?: string;
  validate?: ValidateType;
} & Omit<InputFieldProps, 'validate'>;

const PasswordField: FC<PasswordFieldProps> = ({ label, ...restProps }) => {
  const [visible, toggleVisibility] = useToggle();

  return (
    <TextField
      name="password-field"
      {...restProps}
      endAdornment={
        <IconButton
          type="button"
          onClick={toggleVisibility}
          data-testid="visibility-button"
        >
          {visible ? <Eye /> : <EyeOff />}
        </IconButton>
      }
      label={label}
      type={visible ? 'text' : 'password'}
    />
  );
};

export default PasswordField;
