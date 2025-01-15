import styled from 'styled-components';

export const HousingCardWrapper = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > a {
    width: 100%;
    height: 350px;

    > img {
      width: 100%;
      height: 80%;
      border-radius: 5px;
    }

    > div {
      display: flex;
      justify-content: space-between;

      > h2 {
        color: ${({ theme }) => theme.colors.secondary};
        text-transform: capitalize;
      }
    }
  }

  @media screen and (max-width: 992px) {
    > a {
    width: 100%;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    > a {
    width: 100%;
    height: 200px;
  }
`;
