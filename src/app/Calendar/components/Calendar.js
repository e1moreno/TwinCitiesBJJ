import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { PageSection } from '../styles/Calendar.styles';

const Calendar = React.memo(({ mobile, children }) => {
  const contentProps = useMemo(
    () => (mobile ? { paddingRight: 0, paddingLeft: 0 } : undefined),
    [mobile],
  );
  return <PageSection ContentStyle={contentProps}>{children}</PageSection>;
});
Calendar.propTypes = {
  mobile: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
Calendar.defaultProps = {
  mobile: false,
};

export default Calendar;
