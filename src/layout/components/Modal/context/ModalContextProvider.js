import React from 'react';
import PropTypes from 'prop-types';
import { useImmerReducer } from 'use-immer';

import { CourseModalContent } from '../components/CourseModalContent';

export const ModalStateContext = React.createContext(null);
export const ModalDispatchContext = React.createContext(null);

const MODAL_COMPONENTS = {
  COURSE_MODAL: CourseModalContent,
};

const initialState = {
  ModalComponent: null,
  props: {},
};

const reducer = (draft, action) => {
  switch (action.type) {
    case 'requestOpenModal':
      draft.ModalComponent = MODAL_COMPONENTS[action.modalType];
      draft.props = action.props || {};
      return draft;
    case 'closeModal':
      return initialState;
    default:
      return draft;
  }
};

export const requestOpenModal = (dispatch, modalType, props) =>
  dispatch({ type: 'requestOpenModal', modalType, props });

export const closeModal = (dispatch) => dispatch({ type: 'closeModal' });

const ModalContextProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};
ModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContextProvider;
