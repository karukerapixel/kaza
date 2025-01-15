import styled, { keyframes } from 'styled-components';

// Pop-up window animation
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Pop-up background style
export const PopupWindowWrapper = styled.div`
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  animation: ${fadeIn} 0.3s ease-out;
  position: fixed;
  top: 0;
  left: 0;
`;

// Pop-up window content style
export const PopupWindowContent = styled.div<{ isclosing: string }>`
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  animation: ${({ isclosing }) => isclosing === "false" && fadeIn} 0.3s ease-out;
  position: absolute;
  justify-self: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    > h2 {
      font-size: 1.7rem;
    }

    &:nth-child(2) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 24px;
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    bottom: 0;

    > div {
      &:nth-child(2) {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 24px;
        margin: 0;
      }
    }
  }
`;
