import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useExportPDF } from 'app/Calendar';

import MobileCalendar from '../components/MobileCalendar';

const MobileCalendarContainer = ({ data, days }) => {
  const [currentDayInd, setCurrentDay] = useState(0);
  const [ref, handleExport] = useExportPDF();

  const [calendar, slotCount] = useMemo(() => {
    const mobileCal = new Array(days.length).fill(null).map(() => []);

    let maxMobileSlotCount = 0;
    Object.values(data).forEach((day) => {
      Object.values(day.classes).forEach(({ id, title, startTime }) => {
        mobileCal[day.key].push({ id, primary: title, secondary: startTime });
      });
      const dayLength = mobileCal[day.key].length;
      maxMobileSlotCount = dayLength > maxMobileSlotCount ? dayLength : maxMobileSlotCount;
    });
    return [mobileCal, maxMobileSlotCount];
  }, [data, days]);

  return (
    <MobileCalendar
      days={days}
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
  data: PropTypes.object.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MobileCalendarContainer;
