import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};

  > p {
    color: ${(props) => props.theme.colors.white};
  }
`;
