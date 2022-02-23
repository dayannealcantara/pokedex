import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.colors.primary};
  }
  a {
    text-decoration: none;
  }
  ul, li {
  list-style: none;
  }
  img {
  display: block;
  max-width: 100%;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  :root {
    --color-primary: #003366;
    --color-light-gray: #FBFBFB;
    --color-gray: #BDBDBD;
  }
`;
