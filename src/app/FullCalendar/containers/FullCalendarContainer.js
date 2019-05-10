import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useExportPDF } from 'app/Calendar';
import FullCalendar from '../components/FullCalendar';

const FullCalendarContainer = ({ data, days, slots }) => {
  const [ref, handleExport] = useExportPDF({
    orientation: 'landscape',
    format: 'letter',
  });

  const [calendar, enhancedSlots] = useMemo(() => {
    const cal = new Array(days.length)
      .fill(null)
      .map(() => new Array(slots.length).fill(null));

    Object.values(data).forEach((day) => {
      Object.values(day.classes).forEach(
        ({
          id, shortTitle, subheading, startDateTime,
        }) => {
          const timeSlot = slots.indexOf(startDateTime);
          cal[day.key][timeSlot] = {
            id,
            primary: shortTitle,
            secondary: subheading,
          };
        },
      );
    });

    const formattedSlots = [null, ...slots];
    return [cal, formattedSlots];
  }, [data, days, slots]);

  return (
    <FullCalendar
      ref={ref}
      calendar={calendar}
      days={days}
      slots={enhancedSlots}
      onExport={handleExport}
    />
  );
};
FullCalendarContainer.propTypes = {
  data: PropTypes.object.isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  slots: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default FullCalendarContainer;
