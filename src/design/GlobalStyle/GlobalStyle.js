import { createGlobalStyle } from 'styled-components';

import pattern from 'images/smallpattern.svg';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #28519F;
    background-image: url(${pattern});
  }
`;

export default GlobalStyle;
