import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    font-family: "NanumBarunGothic", sans-serif;
  }
  :root {
    overflow-x : hidden;
  }
  
  html {
    position : relative;
    min-height: 100%;
  }
  body {
    overflow-x : hidden;
    max-width : 100vw;
  }
  
  
    button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    outline : none;
  }
  a {
    text-decoration: none;
    outline: none;
    color : inherit;
    }
  input {
    border : none;
    :focus  {
     outline : none;
    }
  }
`;

export default GlobalStyle;
