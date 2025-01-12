import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.white};
  }

  * {
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    line-height: 1.4;
    border: none;
    box-sizing: border-box;
    list-style-type: none;
    object-fit: cover;
    padding: 0;
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
