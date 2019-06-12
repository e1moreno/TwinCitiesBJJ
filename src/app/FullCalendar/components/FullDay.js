import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Slot, DaySlotContainer } from 'app/Calendar';

const FullDay = ({
  slot, data, headerText, offsetX, offsetY,
}) => (
  <Fragment>
    {headerText && (
      <Slot
        columnStart={slot + 1}
        columnEnd={slot + 2}
        rowStart={1}
        rowEnd={2}
        primary={headerText}
        blank
      />
    )}
    {data.map((bjjCourse, ind) => {
      let extraProps;
      if (bjjCourse) {
        extraProps = {
          key: bjjCourse.id,
          primary: bjjCourse.primary,
          secondary: bjjCourse.secondary,
          data: bjjCourse.course,
        };
      } else {
        extraProps = {
          key: `${slot}_${ind}`,
        };
      }
      return (
        <DaySlotContainer
          columnStart={slot + offsetX}
          columnEnd={slot + offsetX + 1}
          rowStart={ind + offsetY}
          rowEnd={ind + offsetY + 1}
          blank
          {...extraProps}
        />
      );
    })}
  </Fragment>
);

FullDay.propTypes = {
  slot: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string,
    }),
  ).isRequired,
  headerText: PropTypes.string,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
};
FullDay.defaultProps = {
  offsetX: 1,
  offsetY: 1,
  headerText: null,
};

export default FullDay;
