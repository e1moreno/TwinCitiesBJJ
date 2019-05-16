import React from 'react';
import PropTypes from 'prop-types';
import { useExportPDF } from 'app/Calendar';
import FullCalendar from '../components/FullCalendar';

const FullCalendarContainer = ({ data, days, slotCount }) => {
  const [ref, handleExport] = useExportPDF({
    orientation: 'landscape',
    format: 'letter',
  });

  return (
    <FullCalendar
      ref={ref}
      calendar={data}
      days={days}
      slotCount={slotCount}
      onExport={handleExport}
    />
  );
};
FullCalendarContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  slotCount: PropTypes.number.isRequired,
};

export default FullCalendarContainer;
