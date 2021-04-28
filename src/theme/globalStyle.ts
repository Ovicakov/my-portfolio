import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  html,
  body,
  #root,
  .App {
    height: 100%;
    width: 100%;
  }
`
