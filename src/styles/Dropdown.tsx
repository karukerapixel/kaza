import styled from 'styled-components';

export const DropdownWrapper = styled.div<{ mode: 'false' | 'true' }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, mode }) =>
    mode === 'true' ? theme.colors.accent : theme.colors.white};
  border-radius: 5px;
`;

export const DropdownButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 10px 24px;

  > h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.white};
    text-transform: capitalize;
  }
`;

export const DropdownContent = styled.div`
  padding: 24px;
`;
