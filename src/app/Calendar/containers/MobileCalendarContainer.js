import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MobileCalendar from '../components/MobileCalendar';
import useExportPDF from './useExportPDF';

const MobileCalendarContainer = ({ calendar, days, slotCount }) => {
  const [currentDayInd, setCurrentDay] = useState(0);
  const [ref, handleExport] = useExportPDF();

  return (
    <MobileCalendar
      days={days}
      day={days[currentDayInd]}
      slotCount={slotCount}
      currentDayInd={currentDayInd}
      data={calendar[currentDayInd]}
      setCurrentDay={setCurrentDay}
      onExport={handleExport}
      ref={ref}
    />
  );
};
MobileCalendarContainer.propTypes = {
  calendar: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  slotCount: PropTypes.number.isRequired,
};

export default MobileCalendarContainer;
