import React from 'react';
import PropTypes from 'prop-types';

import { PageSection } from '../styles/Calendar.styles';

const Calendar = React.memo(({ mobile, children }) => (
  <PageSection mobile={mobile}>{children}</PageSection>
));
Calendar.propTypes = {
  mobile: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
Calendar.defaultProps = {
  mobile: false,
};

export default Calendar;
