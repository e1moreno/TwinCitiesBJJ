import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import onKeyHelper from 'utils/onKeyHelper';

import ContentCollapse from '../components/ContentCollapse';

const ContentCollapseContainer = ({ wrapperElement, children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen((stateOpen) => !stateOpen);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      onKeyHelper(e, handleClick);
    },
    [handleClick],
  );

  return (
    <ContentCollapse
      open={open}
      wrapperElement={wrapperElement}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </ContentCollapse>
  );
};
ContentCollapseContainer.propTypes = {
  wrapperElement: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ContentCollapseContainer.defaultProps = {
  wrapperElement: null,
};

export default ContentCollapseContainer;
