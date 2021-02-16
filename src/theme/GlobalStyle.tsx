import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`        
  html, body, #__next {
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box; // to ensure that padding is included in width
    min-width: 0; // to ensure the Box can shrink below its minimum content size when used as a flex item.
  }
`;

export default GlobalStyle;
