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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 1;
  animation: ${fadeIn} 0.3s ease-out;
`;

// Pop-up close button style
export const PopupWindowButton = styled.button`
  float: right;
  background-color: transparent;
`;

// Pop-up window content style
export const PopupWindowContent = styled.div<{ isClosing: boolean }>`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation: ${({ isClosing }) => isClosing && fadeIn} 0.3s ease-out;
`;
