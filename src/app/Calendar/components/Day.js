import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slot from './Slot';

const Day = ({ slot, data, headerText }) => (
  <Fragment>
    <Slot
      columnStart={slot + 1}
      columnEnd={slot + 2}
      rowStart={1}
      rowEnd={2}
      value={headerText}
      header
      blank
    />
    {data.map((bjjCourse, ind) => {
      let extraProps;
      if (bjjCourse) {
        extraProps = {
          key: bjjCourse.id,
          value: bjjCourse.title,
        };
      } else {
        extraProps = {
          key: `${slot}_${ind}`,
          blank: true,
        };
      }
      return (
        <Slot
          columnStart={slot + 1}
          columnEnd={slot + 2}
          rowStart={ind + 2}
          rowEnd={ind + 3}
          {...extraProps}
        />
      );
    })}
  </Fragment>
);

Day.propTypes = {
  slot: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string.isRequired }),
  ).isRequired,
  headerText: PropTypes.string.isRequired,
};

export default Day;
