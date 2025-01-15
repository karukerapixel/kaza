import styled from 'styled-components';

export const GalleryWrapper = styled.section`
  width: 100%;
  min-height: 70.8vh;
  display: flex;
  justify-content: center;
  margin: 48px 0;
`;

export const GalleryList = styled.ul`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 350px;
  grid-gap: 24px;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 300px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px;
  }
`;
