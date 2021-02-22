import { useState, ChangeEvent } from 'react';

export interface UseInputOptions {
  validate?: (value: string) => boolean;
  handleChange?: (value: string) => void;
}

const useInput = (initialValue?: string, options?: UseInputOptions) => {
  const [inputValue, setInputValue] = useState<string>(initialValue || '');
  const [isValid, setIsValid] = useState<boolean>();

  return {
    isValid,
    value: inputValue,
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      if (options?.handleChange) options?.handleChange(e.target.value);
    },
    onBlur: () => {
      if (options?.validate) setIsValid(options?.validate(inputValue));
    }
  };
};

export default useInput;
