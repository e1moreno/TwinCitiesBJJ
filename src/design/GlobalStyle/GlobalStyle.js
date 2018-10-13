import { createGlobalStyle } from 'styled-components';

import pattern from 'images/smallpattern.svg';

const GlobalStyle = createGlobalStyle`
  html {
    --white: #FAFAFA;
    --menuGray: #2B2B2B;
    z-index: -1;
    background-color: #28519F;
    background-image: url(${pattern});
    font-size: 16px;
    font-family: 'Contrail One';

    @media (max-width: 600px) {
      font-size: 14px;
    }
  };
  body {
    margin: 0;
  }
`;

export default GlobalStyle;
