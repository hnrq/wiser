import useInput from './useInput';
import { renderHook, act } from '@testing-library/react-hooks';
import { ChangeEvent } from 'react';

describe('useInput test section', () => {
  it('should return the given initialValue', () => {
    const { result } = renderHook(() => useInput('test'));

    expect(result.current.value).toBe('test');
  });

  it('should call validate function when blurred', () => {
    const mockValidate = jest.fn(() => true);
    const { result } = renderHook(() =>
      useInput('test', {
        validate: mockValidate
      })
    );
    act(() => {
      result.current.onBlur();
    });

    expect(mockValidate).toHaveBeenCalled();
    expect(result.current.isValid).toBe(true);
  });

  it('should call handleChange function when onChange is called', () => {
    const mockHandleChange = jest.fn();
    const { result } = renderHook(() =>
      useInput('test', {
        handleChange: mockHandleChange
      })
    );
    act(() => {
      result.current.onChange({
        target: { value: 'new value' }
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(mockHandleChange).toHaveBeenCalledWith('new value');
  });
});
