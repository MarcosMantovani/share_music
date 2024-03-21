import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh; // If the browser does not support the svh unit
    height: 100svh;
    overflow: hidden;
    background-image: linear-gradient(45deg, #76235e, #3b2376);
  }

  * {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 640px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .purple {
    color: #8b35bd;
    }

    .MuiSvgIcon-root {
      color: #8b35bd;
    }

    .purpleInput {
    color: #8b35bd;
    border: 1px solid #8b35bd;
    border-radius: 4px;
    }

    @media (max-width: 767px) {
      width: 90%;
    }
  }
`
