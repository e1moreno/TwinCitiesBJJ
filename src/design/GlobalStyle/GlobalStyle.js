import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FAFAFA;
    --menuGray: #2B2B2B;
    --blue: #28519F ;
    --darkBlue: #1e4476;
    --orange: #E84011;

    --navBarHeight: 72px;
    --bannerFooterSize: 6em;
    --smallDisplay: 600px;
    --mediumDisplay: 1024px;
  }
  html {
    background: linear-gradient(to right,var(--blue) 0%,var(--darkBlue) 100%);
    font-size: 16px;

    @media (max-width: 600px) {
      font-size: 10px;
    }
  };
  body {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover, &:active {
      color: inherit;
    }
  }

  h2 {
    margin: 0;
    padding: 0;
    color: inherit;
  }
`;

export default GlobalStyle;
