import React from 'react';
import PropTypes from 'prop-types';
import { INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { FeatureToggle } from 'lib/FeatureToggle';
import featureKey from 'utils/featureKey';
import { LongLogo } from 'screens/home/components/LongLogo';
import IntroductionGalleryContainer from '../containers/IntroductionGalleryContainer';

import {
  PageSection,
  IntroHeader,
  IntroSubheader,
  IntroContent,
  IframeContainer,
} from '../styles/Introduction.styles';

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node) => {
      if (node.data.uri.includes('youtube.com/embed')) {
        console.log(node);
        return (
          <IframeContainer>
            <iframe
              title={node.content[0].value}
              src={node.data.uri}
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            />
          </IframeContainer>
        );
      }
      return false;
    },
  },
};

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
        <div>{documentToReactComponents(content, options)}</div>
      </IntroContent>
    </FeatureToggle>
  </PageSection>
);
Introduction.propTypes = {
  subHeader: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};

export default Introduction;
