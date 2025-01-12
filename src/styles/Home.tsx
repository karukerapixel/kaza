import styled from 'styled-components';

export const GalleryWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 48px 0;
`;

export const GalleryList = styled.ul`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: min(350px);
  grid-gap: 24px;
`;

