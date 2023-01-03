import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  html, body, #__next {
    min-height: -webkit-fill-available;
    height: -webkit-fill-available;
  }

  body {
    font-family:Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI',Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  ul{
    list-style:none;
  }

  button{
    cursor:pointer;
  }


`;
