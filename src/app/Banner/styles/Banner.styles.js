import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  z-index: 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.8), 0 0 14px rgba(0, 0, 0, 0.6);
`;

export const BannerImage = styled.img`
  -webkit-filter: grayscale(1) brightness(90%);
  filter: grayscale(1) brightness(90%);
  object-fit: cover;
  width: 100%;
  height: calc(100vh - 4rem);
  margin: 0;
`;

export const BannerGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1rem auto 1rem;
  grid-template-rows: 1rem 48px 70% 48px auto 1rem;
  grid-template-areas:
    '. . .'
    '. navigation .'
    '. . .'
    '. contact .'
    '. . .'
    '. . .';
`;
