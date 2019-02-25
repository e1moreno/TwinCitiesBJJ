import styled from 'styled-components';
import { PageSection as BasePageSection } from 'design/PageSection';
import { SectionContent } from 'design/PageSection/styles/PageSection.styles';

export const PageSection = styled(BasePageSection)`
  @media (max-width: 600px) {
    padding: 0;
  }
  ${SectionContent} {
    padding-right: ${({ mobile }) => mobile && 0};
    padding-left: ${({ mobile }) => mobile && 0};
  }
`;
