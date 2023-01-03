import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
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
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  ul{
    list-style:none;
  }

  button{
    cursor:pointer;
  }


`;