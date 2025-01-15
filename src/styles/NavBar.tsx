import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
  display: flex;

  > a {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    font-weight: 900;
    padding: 10px 20px;
  }
`;
