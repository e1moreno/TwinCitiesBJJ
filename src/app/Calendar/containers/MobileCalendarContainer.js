import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MobileCalendar from '../components/MobileCalendar';

const MobileCalendarContainer = ({ calendar, days, slots }) => {
  const [currentDayInd, setCurrentDay] = useState(0);

  return (
    <MobileCalendar
      days={days}
      day={days[currentDayInd]}
      slots={slots}
      currentDayInd={currentDayInd}
      data={calendar[currentDayInd]}
      setCurrentDay={setCurrentDay}
    />
  );
};
MobileCalendarContainer.propTypes = {
  calendar: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  slots: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MobileCalendarContainer;
