import { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';

import { SMALL_VIEW, MEDIUM_VIEW } from 'utils/constants';

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

  useEffect(() => {
    const updateWindowDimensions = () => {
      dispatch({
        type: 'updateBoth',
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  const { width, height } = state;

  return {
    width,
    height,
    mobile: width <= SMALL_VIEW,
    medium: width <= MEDIUM_VIEW,
  };
};

export default useWindowSize;
