import styled from 'styled-components';

export const HousingHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  > h1 {
    font-size: 1.7rem;
  }
`;

export const HousingHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  > button {
    display: flex;
    align-items: center;
    background-color: transparent;
    grid-gap: 4px;

    > svg {
      width: 15px;
      height: 15px;
    }

    > span {
      font-weight: 500;
      text-decoration: underline;
    }
  }
`;

export const HousingContent = styled.section`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
`;

export const HousingContentBloc = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h2 {
    font-size: 1.7rem;
  }

  > ul {
    display: flex;
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
`;

export const HousingDropdowns = styled.section`
  width: 90%;
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;
