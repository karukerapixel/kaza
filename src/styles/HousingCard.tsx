import styled from "styled-components";

export const HousingCardWrapper = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > a {
    width: 100%;
    height: 100%;

    > img {
      width: 100%;
      height: 80%;
      border-radius: 5px;
    }

    > h2 {
      text-transform: capitalize;
    }
  }
`;
