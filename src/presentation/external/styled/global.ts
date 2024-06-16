'use client'

import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "DM Sans";
  }

  html, body, #root {
    min-height: 100vh !important;
    height: auto;
    background-color: ${theme.colors.black700};
    color: ${theme.colors.white};
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  
  a, a:hover {
    color: inherit;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1rem;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
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
