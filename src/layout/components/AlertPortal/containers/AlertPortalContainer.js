import React, { useState, useContext, useCallback } from 'react';

import onKeyHelper from 'utils/onKeyHelper';
import { AlertPortalContext } from '../context/AlertPortalContextProvider';
import AlertPortal from '../components/AlertPortal';

const AlertPortalContainer = () => {
  const { data } = useContext(AlertPortalContext);
  const [visible, setVisible] = useState(!!data?.content.length > 0);

  const handleCloseClick = useCallback(() => setVisible(false), []);

  const handleCloseKeyDown = useCallback(
    (e) => {
      onKeyHelper(e, () => handleCloseClick());
    },
    [handleCloseClick],
  );

  return (
    <AlertPortal
      visible={visible}
      message={data}
      onCloseClick={handleCloseClick}
      onCloseKeyDown={handleCloseKeyDown}
    />
  );
};

export default AlertPortalContainer;
