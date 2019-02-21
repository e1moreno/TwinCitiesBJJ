import styled from 'styled-components';
import { PageSection as BasePageSection } from 'design/PageSection';

export const PageSection = styled(BasePageSection)`
  @media (max-width: 600px) {
    padding: 0;
  }
`;
