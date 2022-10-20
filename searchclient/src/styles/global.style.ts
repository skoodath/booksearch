import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  list-style-type: none;
  box-sizing: border-box;
  letter-spacing: 2px;
  color: #0c092e;
}
  body{
    font-family: helvetica sans-serif;
  }
`;

export default GlobalStyle;
