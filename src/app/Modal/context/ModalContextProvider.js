import React from 'react';
import PropTypes from 'prop-types';
import { useImmerReducer } from 'use-immer';

export const ModalContext = React.createContext(null);

const initialState = {
  open: false,
  modalType: '',
  props: {},
};

const reducer = (draft, action) => {
  switch (action.type) {
    case 'requestOpenModal':
      draft.modalType = action.modalType;
      draft.props = action.props || {};
      return draft;
    case 'setOpen':
      draft.open = action.open;
      return draft;
    case 'closeModal':
      return initialState;
    default:
      return draft;
  }
};

const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
ModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContextProvider;
