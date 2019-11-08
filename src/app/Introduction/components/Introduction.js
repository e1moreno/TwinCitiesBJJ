import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { FeatureToggle } from 'app/FeatureToggle';
import featureKey from 'utils/featureKey';
import { LongLogo } from 'app/LongLogo';
import IntroductionGalleryContainer from '../containers/IntroductionGalleryContainer';

import {
  PageSection,
  IntroHeader,
  IntroSubheader,
  IntroContent,
} from '../styles/Introduction.styles';

const Introduction = ({ subHeader, content }) => (
  <PageSection>
    <IntroHeader as="span">
      <LongLogo as="h2" />
    </IntroHeader>
    <FeatureToggle feature={featureKey.homeContent}>
      <IntroSubheader>{subHeader}</IntroSubheader>
      <FeatureToggle feature={featureKey.homeGallery}>
        <IntroductionGalleryContainer />
      </FeatureToggle>
      <IntroContent>
        <div>{documentToReactComponents(content)}</div>
      </IntroContent>
    </FeatureToggle>
  </PageSection>
);
Introduction.propTypes = {
  subHeader: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};

export default Introduction;
