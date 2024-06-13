'use client'

import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "DM Sans";
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.black700};
    color: ${theme.colors.white};
  }
  
  a, a:hover {
    color: inherit;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1rem;
    background-color: #F8F8F8;
    width: 100vw;
    height: 100%;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  @media (max-width: 720px) {
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 430px) {
    html {
      font-size: 43,75%;
    }
  }

`
