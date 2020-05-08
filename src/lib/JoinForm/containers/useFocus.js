import { useState, useCallback } from 'react';

const useFocus = (initial = false) => {
  const [focus, setFocus] = useState(initial);

  const handleFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return {
    focus,
    handleBlur,
    handleFocus,
  };
};

export default useFocus;
