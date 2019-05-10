import React, { Fragment, forwardRef } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Export as ExportIcon } from 'styled-icons/boxicons-regular';

import Slot from 'app/Calendar/components/Slot';
import FullDay from './FullDay';
import {
  GridWrapper,
  CalendarHeader,
  CalendarInstructions,
  CalendarTitle,
  CalendarExportIconWrapper,
  Icon,
  CalendarGrid,
} from '../styles/FullCalendar.styles';

const formatTime = time => dayjs(time).format('hh:mm A');

const Header = ({ onExport }) => (
  <CalendarHeader>
    <CalendarInstructions>
      <CalendarTitle>Weekly Schedule</CalendarTitle>
    </CalendarInstructions>
    <CalendarExportIconWrapper>
      <Icon
        renderElement="button"
        Symbol={ExportIcon}
        onClick={onExport}
        title="Export Mobile Calendar"
      />
    </CalendarExportIconWrapper>
  </CalendarHeader>
);
Header.propTypes = {
  onExport: PropTypes.func.isRequired,
};

const FullCalendar = forwardRef(({
  calendar, days, slots, onExport,
}, ref) => (
  <Fragment>
    <GridWrapper>
      <Header onExport={onExport} />
      <CalendarGrid ref={ref} columns={days.length} rows={slots.length - 1}>
        {slots.map((time, ind) => {
          // sets time
          if (time) {
            return (
              <Slot
                key={time}
                columnStart={1}
                columnEnd={2}
                rowStart={ind + 1}
                rowEnd={ind + 2}
                primary={formatTime(time)}
                blank
              />
            );
          }
          return (
            <Slot
              key="blank"
              columnStart={1}
              columnEnd={2}
              rowStart={ind + 1}
              rowEnd={ind + 2}
              primary=""
              blank
            />
          );
        })}
        {calendar.map((day, ind) => (
          // Maps time slots
          <FullDay
            key={ind} // eslint-disable-line react/no-array-index-key
            slot={ind + 1}
            data={day}
            headerText={days[ind]}
            offsetY={2}
          />
        ))}
      </CalendarGrid>
    </GridWrapper>
  </Fragment>
));
FullCalendar.propTypes = {
  calendar: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  slots: PropTypes.arrayOf(PropTypes.number).isRequired,
  onExport: PropTypes.func.isRequired,
};

export default FullCalendar;
