import styled from 'styled-components';

export const HousingHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  > h1 {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 768px) {
    > h1 {
      font-size: 1.2rem;
    }
  }
`;

export const HousingHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  > button {
    > span {
      font-weight: 500;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HousingHeaderSettings = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const HousingContent = styled.section`
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin: 24px 0;

  > div {
    &:nth-child(2) {
      align-self: flex-end;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    > div {
      &:nth-child(2) {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
      }
    }
  }
`;

export const HousingContentBloc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  > h2 {
    font-size: 1.7rem;
  }

  > ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    > li {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 5px;
      padding: 5px 10px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    > h2 {
      font-size: 1.2rem;
    }

    > div {
      flex-direction: row-reverse;
    }
  }
`;

export const HousingDropdowns = styled.section`
  width: 90%;
  display: flex;
  gap: 24px;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
