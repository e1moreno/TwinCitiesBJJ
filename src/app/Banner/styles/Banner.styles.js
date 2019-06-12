import styled from 'styled-components';
import TCBJJLogo from 'images/TCBJJLogo';
import { Link } from 'gatsby';

export const BannerWrapper = styled.header`
  position: relative;
`;

export const BannerImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  height: 70vh;
  max-height: 800px;
  background: var(--pureBlack);
`;

export const BannerImage = styled.img`
  -webkit-filter: grayscale(1) brightness(70%);
  filter: grayscale(1) brightness(70%);
  object-fit: cover;
  width: 100%;
  margin: 0 auto;
  max-width: 1920px;
`;

export const BannerGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1rem auto 1rem;
  grid-template-rows: 8px var(--navBarHeight) calc(70% - var(--navBarHeight)) 48px 1fr 4rem 8px;
  grid-template-areas:
    '. . .'
    '. header .'
    '. . .'
    '. contact .'
    '. . .'
    '. pageTitle .';
`;

export const HeaderLogoWrapper = styled.h1`
  grid-area: header;
  margin: 0;
`;

export const HeaderLink = styled(Link)``;

export const Logo = styled(TCBJJLogo)``;

export const PageTitleWrapper = styled.div`
  grid-area: pageTitle;
  display: flex;
  width: 100%;
  max-width: var(--pageSectionMaxWidth);
  margin: 0 auto;
`;

export const PageTitle = styled.h2`
  text-transform: uppercase;
  color: var(--white);
  font-size: 3rem;
  letter-spacing: 5px;
`;
