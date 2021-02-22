import useToggle from './useToggle';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useToggle test section', () => {
  it('can receive an initial value', () => {
    const { result } = renderHook(() => useToggle(true));
    
    expect(result.current[0]).toBe(true);
  });

  it('should return a function to toggle the status', () => {
    const { result } = renderHook(() => useToggle());
    
    expect(result.current[0]).toBe(false);
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);
  });
});