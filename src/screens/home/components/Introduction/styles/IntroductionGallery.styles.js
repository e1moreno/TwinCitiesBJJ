import styled from 'styled-components';
import { SMALL_VIEW } from 'utils/constants';

export const GalleryGrid = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  padding: 2rem 0;

  @media (max-width: ${SMALL_VIEW}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;
