import styled from 'styled-components';

export const BannerWrapper = styled.div`
  position: relative;
`;

export const BannerImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`;

export const BannerImage = styled.img`
  -webkit-filter: grayscale(1) brightness(90%);
  filter: grayscale(1) brightness(90%);
  object-fit: cover;
  width: 100%;
  height: calc(100vh - var(--navBarHeight) - var(--bannerFooterSize));
  max-height: var(--mediumDisplay);
  margin: 0;
  z-index: -1;
`;

export const BannerGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1rem auto 1rem;
  grid-template-rows: 70% 48px 1fr;
  grid-template-areas:
    '. . .'
    '. contact .'
    '. . .';
`;
