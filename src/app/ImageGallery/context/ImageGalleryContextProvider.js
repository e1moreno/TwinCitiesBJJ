import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useImmerReducer } from 'use-immer';

export const ImageGalleryContext = createContext();

const reducer = (draft, action) => {
  switch (action.type) {
    case 'setSource':
      draft.src = action.src;
      draft.currentImage = action.currentImage;
      break;
    case 'setOpen':
      draft.open = action.open;
      break;
    case 'setCurrentImage':
      draft.currentImage = action.currentImage;
      break;
    case 'openGallery':
      draft.open = true;
      draft.currentImage = action.currentImage || draft.currentImage;
      draft.src = action.src || draft.src;
      break;
    default:
      break;
  }
};

const ImageGalleryContextProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, {
    src: [],
    open: false,
    currentImage: 0,
  });

  return (
    <ImageGalleryContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ImageGalleryContext.Provider>
  );
};
ImageGalleryContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImageGalleryContextProvider;
