import React from 'react';
import PropTypes from 'prop-types';
import { useImmerReducer } from 'use-immer';

export const LayoutContext = React.createContext();

const reducer = (draft, action) => {
  switch (action.type) {
    case 'setOpen':
      draft.open = action.open;
      break;
    default:
      break;
  }
};

const LayoutContextProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, {
    open: false,
  });

  return (
    <LayoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
LayoutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutContextProvider;
