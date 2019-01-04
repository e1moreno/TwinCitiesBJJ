import { createGlobalStyle } from 'styled-components';
import pattern from 'images/smallpattern.svg';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FAFAFA;
    --off-white: #F6F6F9;
    --black: #222222;
    --red: #FF4136;
    --menuGray: #2B2B2B;
    --gray: #515151;
    --text-gray: #555555;
    --blue: #28519F ;
    --darkBlue: #14284F;
    --purple: #3A289F;
    --orange: #F84011;
    --yellow: #fdfe70;

    --navBarHeight: 86px;
    --bannerFooterSize: 5em;
    --smallDisplay: 600px;
    --mediumDisplay: 1024px;
  }
  html {
    font-family: 'Source Sans Pro', 'sans-serif';
    font-feature-settings: "kern" 1;
    /* background: linear-gradient(to right,var(--blue) 0%,var(--darkBlue) 100%); */
    background-color: #28519f;
    background-image: url(${pattern});
    color: var(--text-gray)
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
    font-size: 1.8rem;
    font-weight: 600;
  }
  h2 {
    font-weight: 600;
    margin: 0;
    padding: 0;
    color: inherit;

    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 1.2rem;

    @media (max-width: 600px) {
      font-size: 1.1rem;
    }
  }

  input {
    border: unset;
  }
  textarea {
    border: unset;
    font-family: unset;
  }
`;

export default GlobalStyle;
