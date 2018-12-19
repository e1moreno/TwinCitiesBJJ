import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FAFAFA;
    --menuGray: #2B2B2B;
    --blue: #28519F ;
    --darkBlue: #14284F;
    --orange: #E84011;
    --yellow: #fdfe70;

    --navBarHeight: 86px;
    --bannerFooterSize: 5em;
    --smallDisplay: 600px;
    --mediumDisplay: 1024px;
  }
  html {
    font-family: 'Source Sans Pro', 'sans-serif';
    font-feature-settings: "kern" 1;
    background: linear-gradient(to right,var(--blue) 0%,var(--darkBlue) 100%);
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

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: inherit;
  }
`;

export default GlobalStyle;
