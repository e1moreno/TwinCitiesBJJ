import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useExportPDF } from 'app/Calendar';

import MobileCalendar from '../components/MobileCalendar';

const MobileCalendarContainer = ({ data, days, slotCount }) => {
  const [currentDayInd, setCurrentDay] = useState(0);
  const [ref, handleExport] = useExportPDF({
    format: 'letter',
  });

  return (
    <MobileCalendar
      days={days}
      slotCount={slotCount}
      currentDayInd={currentDayInd}
      data={data[currentDayInd]}
      setCurrentDay={setCurrentDay}
      onExport={handleExport}
      ref={ref}
    />
  );
};
MobileCalendarContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  slotCount: PropTypes.number.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MobileCalendarContainer;
