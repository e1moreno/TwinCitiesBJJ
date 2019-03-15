import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slot from 'app/Calendar/components/Slot';

const Day = ({
  slot, data, offsetX, offsetY,
}) => (
  <Fragment>
    {data.map(({ id, primary, secondary }, ind) => (
      <Slot
        key={id}
        primary={primary}
        secondary={secondary}
        columnStart={slot + offsetX}
        columnEnd={slot + offsetX + 1}
        rowStart={ind + offsetY}
        rowEnd={ind + offsetY + 1}
        blank
      />
    ))}
  </Fragment>
);

Day.propTypes = {
  slot: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string,
    }),
  ).isRequired,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
};
Day.defaultProps = {
  offsetX: 1,
  offsetY: 1,
};

export default Day;
