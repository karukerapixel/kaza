import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 14px;
`;

export const CarouselPictures = styled.img`
  width: 100%;
  height: 60vh;
  border-radius: 5px;
`;

export const CarouselButton = styled.button`
  border-radius: 5px;
  position: absolute;
  padding: 10px;
  margin: 24px;

  > * {
    font-size: 2rem;
    font-weight: 900;
  }
`;
