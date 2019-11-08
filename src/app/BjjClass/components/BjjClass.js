import React from 'react';
import PropTypes from 'prop-types';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Banner } from 'app/Banner';
import floorImage from 'images/floor.jpg';

import { MainContent, PageSection } from '../styles/BjjClass.styles';

const BjjClass = ({
  mobile, shortTitle, title, content,
}) => (
  <>
    <Banner
      pageTitle={mobile ? shortTitle : title}
      image={{
        source: floorImage,
        alt: 'Students Drilling reps on the ground',
      }}
    />
    <MainContent>
      <PageSection>
        {content ? documentToReactComponents(content) : ''}
      </PageSection>
    </MainContent>
  </>
);

BjjClass.propTypes = {
  mobile: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  shortTitle: PropTypes.string.isRequired,
  content: PropTypes.object,
};
BjjClass.defaultProps = {
  content: null,
};

export default BjjClass;
