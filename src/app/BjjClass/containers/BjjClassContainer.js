import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useWindowSize } from 'design/WindowSize';

import BjjClass from '../components/BjjClass';

const BjjClassContainer = ({ data: { content, ...other } }) => {
  const { shortTitle, title, content: jsonContent } = useMemo(
    () => ({
      ...other,
      ...(!!content
        && Object.prototype.hasOwnProperty.call(content, 'json') && {
        content: content.json,
      }),
    }),
    [content, other],
  );
  const { mobile } = useWindowSize();

  return (
    <>
      <BjjClass
        mobile={mobile}
        title={title}
        shortTitle={shortTitle}
        content={jsonContent}
      />
    </>
  );
};

BjjClassContainer.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    shortTitle: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    content: PropTypes.shape({
      json: PropTypes.object,
    }),
  }).isRequired,
};

export default BjjClassContainer;
