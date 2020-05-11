import React from 'react';
import PropTypes from 'prop-types';
import Portal from '@reach/portal';
import Alert from '@reach/alert';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// I have grown to not like the .styles syntax. Won't be using it going forward.
import styled from 'styled-components';

import CloseButton from 'lib/CloseButton';

const FixedWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const ContentWrapper = styled.div`
  position: relative;

  background-color: var(--red);
  color: var(--offWhite);

  padding: 1.5rem 3rem;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.2), 0px 1px 8px rgba(0, 0, 0, 0.15);
`;

const AlertPortal = ({ visible, message, onCloseClick, onCloseKeyDown }) => (
  <Portal>
    {visible && (
      <FixedWrapper>
        <ContentWrapper>
          <CloseButton onClick={onCloseClick} onKeyDown={onCloseKeyDown} />
          <Alert> {message ? documentToReactComponents(message) : ''}</Alert>
        </ContentWrapper>
      </FixedWrapper>
    )}
  </Portal>
);
AlertPortal.propTypes = {
  visible: PropTypes.bool.isRequired,
  message: PropTypes.object,
  onCloseClick: PropTypes.func.isRequired,
  onCloseKeyDown: PropTypes.func.isRequired,
};
AlertPortal.defaultProps = {
  message: null,
};

export default AlertPortal;
