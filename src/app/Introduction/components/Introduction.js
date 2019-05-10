import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { ContentCollapseContainer } from 'design/ContentCollapse';
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
    <IntroSubheader>{subHeader}</IntroSubheader>
    <IntroductionGalleryContainer />
    <IntroContent>
      <div>{documentToReactComponents(content)}</div>
      <ContentCollapseContainer wrapperElement="p">
        Lorem ipsum dolor sit amet, graeci possit te vis, dicta placerat ius ea,
        no sea tollit latine. Sea at legendos disputando. Vix at bonorum
        nostrum, ei doming scripserit nam. Ne pri soluta pertinacia cotidieque,
        sit vero maiorum propriae te. Dicta praesent elaboraret no cum, an malis
        nonumes theophrastus sit. Mea no decore sapientem, nec congue verear
        apeirian et. Vix aeque sonet errem ex, vix id porro dicam inermis. Vel
        accusam placerat argumentum ne. Est in lucilius senserit, erat invenire
        id mel, nostrum intellegebat definitionem his in. Ei usu denique
        voluptaria, te discere corrumpit sed, et nemore eligendi comprehensam
        cum. Vix aperiri nominavi insolens ne, audire docendi cum cu. Vidisse
        prompta temporibus ius ut, blandit neglegentur necessitatibus et eum.
        Eum graeci singulis te, est ne autem zril. Mollis copiosae detraxit vim
        ad, te mea facete discere.
      </ContentCollapseContainer>
    </IntroContent>
  </PageSection>
);
Introduction.propTypes = {
  subHeader: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
};

export default Introduction;
