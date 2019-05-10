import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import { useWindowSize } from 'design/WindowSize';

import BjjClass from '../components/BjjClass';

const Header = React.memo(({ pageTitle }) => (
  <Helmet>
    <title>{pageTitle}</title>
  </Helmet>
));
Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

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
    <Fragment>
      <Header pageTitle={shortTitle} />
      <BjjClass
        mobile={mobile}
        title={title}
        shortTitle={shortTitle}
        content={jsonContent}
      />
    </Fragment>
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
