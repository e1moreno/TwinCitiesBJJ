import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MobileCalendar from '../components/MobileCalendar';

const MobileCalendarContainer = ({ data, days, slotCount }) => {
  const [currentDayInd, setCurrentDay] = useState(0);

  return (
    <MobileCalendar
      days={days}
      slotCount={slotCount}
      currentDayInd={currentDayInd}
      data={data[currentDayInd]}
      setCurrentDay={setCurrentDay}
    />
  );
};
MobileCalendarContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  slotCount: PropTypes.number.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MobileCalendarContainer;
