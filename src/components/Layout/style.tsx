import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.white};
  }

  * {
    font-size: 14px;
    font-family: "Inter", sans-serif;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
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
