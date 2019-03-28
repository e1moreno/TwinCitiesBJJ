import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --offWhite: #F6F6F9;
    --black: #222222;
    --pureBlack: #292724;
    --red: #FF4136;
    --menuGray: #2B2B2B;
    --lightGray: #f0f2f6;
    --gray: #515151;
    --textGray: #555555;
    --blue: #28519F ;
    --darkBlue: #14284F;
    --purple: #3A289F;
    --backgroundPurple: #581e76;
    --backPurpleAlt: #3a144d;
    --brown: #752e1f;
    --orange: #F84011;
    --yellow: #fdfe70;
    --fbBlue: #3b5998;
    --instaPurp: #c32aa3;

    --navBarHeight: 86px;
    --bannerFooterSize: 2.2rem;
    --smallDisplay: 600px;
    --mediumDisplay: 1024px;
    --pageSectionMaxWidth: 1200px;
  }
  html {
    font-family: 'Source Sans Pro', 'sans-serif';
    font-feature-settings: "kern" 1;
    background-color: var(--white);
    color: var(--white)
  };
  body {
    margin: 0;
    overflow: ${({ open }) => open && 'hidden'};
    background-color: var(--blue);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%2328508c' fill-opacity='0.505'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
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
  }
  h3 {
    font-weight: 600;
    font-size: 1.2rem;
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
