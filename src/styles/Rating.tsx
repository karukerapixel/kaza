import styled from 'styled-components';

export const RatingWrapper = styled.span`
  display: flex;
  gap: 8px;

  > img {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 768px) {
    > img {
      width: 15px;
      height: 15px;
    }
  }
`;
