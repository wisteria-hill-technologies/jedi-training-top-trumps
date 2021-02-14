import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`        
  html, body, #__next {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    boxSizing: border-box; // to ensure that padding is included in width
    minWidth: 0; // to ensure the Box can shrink below its minimum content size when used as a flex item.
  }
`;

export default GlobalStyle;
