import { useState, useMemo, useCallback } from 'react';

const useToggle = (initialValue: boolean = false) => {
  const [status, setStatus] = useState<boolean>(initialValue);

  const toggleStatus = useCallback<() => void>(() => {
    setStatus((prevStatus) => !prevStatus);
  }, []);

  return useMemo(() => [status, toggleStatus] as const, [status, toggleStatus]);
};

export default useToggle;