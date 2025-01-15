import React, { ReactNode } from 'react';
import { DropdownButton, DropdownContent, DropdownWrapper } from '../styles/Dropdown';
import { useToggle } from '../hooks/useToggle';

type DropdownProps = {
  heading: string;
  content: ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({ heading, content }) => {
  const [isOpened, toggle] = useToggle();

  return (
    <DropdownWrapper role="region" mode={`${isOpened}`}>
      <DropdownButton type="button" onClick={toggle}>
        <h2>{heading}</h2>
      </DropdownButton>
      {isOpened && <DropdownContent>{content}</DropdownContent>}
    </DropdownWrapper>
  );
};

export default Dropdown;
