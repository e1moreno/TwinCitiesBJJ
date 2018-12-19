import React from 'react';

import { CollapseContainer } from 'design/Collapse';
import { PageSection } from 'design/PageSection';
import { ImageGalleryContextConsumer } from 'app/ImageGallery';
import IntroductionGalleryContainer from '../containers/IntroductionGalleryContainer';

import { IntroHeader, IntroContent } from '../styles/Introduction.styles';

const Introduction = () => (
  <PageSection color="var(--white)">
    <IntroHeader>
      This is an introduction header with any information we may want
    </IntroHeader>
    <ImageGalleryContextConsumer>
      {({ openGallery }) => (
        <IntroductionGalleryContainer openGallery={openGallery} />
      )}
    </ImageGalleryContextConsumer>
    <IntroContent>
      <div>
        <p>
          Id nam illum atomorum. Nam commodo numquam instructior ei, eirmod
          detraxit pri an. Ea vix sententiae disputationi, ne nec falli fierent.
          Cum albucius legendos ea. Pro in postea scaevola percipitur. Ad vix
          sint tempor, eam eu prima reque molestie. Illum porro conclusionemque
          qui ei, eam cu intellegat voluptatum.
        </p>
      </div>
      <CollapseContainer wrapperElement="p">
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
      </CollapseContainer>
    </IntroContent>
  </PageSection>
);

export default Introduction;
