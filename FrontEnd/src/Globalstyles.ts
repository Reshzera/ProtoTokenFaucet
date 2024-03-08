import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  body{
    background-color: #101010;
  }

  button{
    border: 1px solid red;
  }
`;
