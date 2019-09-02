import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #ecf1f8;
    color: #333;
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;