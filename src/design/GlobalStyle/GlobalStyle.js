import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    --white: #FAFAFA;
    --menuGray: #2B2B2B;
    --blue: #28519F ;
    --darkBlue: #1e4476;
    z-index: -1;
    background: linear-gradient(to right,var(--blue) 0%,var(--darkBlue) 100%);
    font-size: 16px;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  };
  body {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
