import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NotFoundPageWrapper = styled.div`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0;
`;

export const NotFoundPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 288px;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0;

    @media screen and (max-width: 768px) {
      font-size: 96px;
    }
  }

  > h2 {
    color: ${({ theme }) => theme.colors.primary};
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const NotFoundPageRedirectLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-top: 50px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
