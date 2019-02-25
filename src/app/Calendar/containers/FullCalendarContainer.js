import React from 'react';
import PropTypes from 'prop-types';
import useExportPDF from './useExportPDF';
import FullCalendar from '../components/FullCalendar';

const FullCalendarContainer = ({ calendar, days, slots }) => {
  const [ref, handleExport] = useExportPDF();

  return (
    <FullCalendar
      ref={ref}
      calendar={calendar}
      days={days}
      slots={slots}
      onExport={handleExport}
    />
  );
};
FullCalendarContainer.propTypes = {
  calendar: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  slots: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default FullCalendarContainer;
