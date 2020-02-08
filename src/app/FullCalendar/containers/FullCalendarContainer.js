import React from 'react';
import PropTypes from 'prop-types';

import FullCalendar from '../components/FullCalendar';

const FullCalendarContainer = ({ data, days, slotCount }) => <FullCalendar calendar={data} days={days} slotCount={slotCount} />;
FullCalendarContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  slotCount: PropTypes.number.isRequired,
};

export default FullCalendarContainer;
