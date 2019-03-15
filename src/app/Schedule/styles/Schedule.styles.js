import styled from 'styled-components';
import { PageSection as BasePageSection } from 'design/PageSection';
import { SMALL_VIEW } from 'utils/constants';

export const MainContent = styled.main``;

export const PageSection = styled(BasePageSection)`
  @media (max-width: ${SMALL_VIEW}px) {
    padding: 2.375rem 0;
  }
`;
