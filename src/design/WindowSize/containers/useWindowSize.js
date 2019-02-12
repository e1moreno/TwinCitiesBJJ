import { useEffect, useCallback } from 'react';
import { useImmerReducer } from 'use-immer';

const reducer = (draft, action) => {
  switch (action.type) {
    case 'updateBoth':
      draft.width = action.width;
      draft.height = action.height;
      break;
    default:
      break;
  }
};

const useWindowSize = () => {
  const [state, dispatch] = useImmerReducer(reducer, {
    width: 0,
    height: 0,
  });

  const updateWindowDimensions = useCallback(() => {
    dispatch({
      type: 'updateBoth',
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }, []);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', this.updateWindowDimensions);
  }, []);

  const { width, height } = state;

  return { width, height };
};

export default useWindowSize;
