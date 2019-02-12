import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import onKeyHelper from 'utils/onKeyHelper';

import Collapse from '../components/Collapse';

const CollapseContainer = ({ wrapperElement, children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleKeyDown = useCallback((e) => {
    onKeyHelper(e, handleClick);
  }, []);

  return (
    <Collapse
      open={open}
      wrapperElement={wrapperElement}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </Collapse>
  );
};
CollapseContainer.propTypes = {
  wrapperElement: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CollapseContainer.defaultProps = {
  wrapperElement: null,
};

export default CollapseContainer;
