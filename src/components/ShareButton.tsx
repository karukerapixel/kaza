import React from 'react';
import { useToggle } from 'hooks/useToggle';
import { FaShareAlt } from 'react-icons/fa';
import Button from './Button';
import PopupWindow from './PopupWindow';

const ShareButton: React.FC = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <>
      <Button icon={<FaShareAlt />} text={'Partager'} onClick={toggle} />
      {isOpen && (
        <PopupWindow isOpen={isOpen} onClose={toggle}>
          <h2>Partager cette annonce</h2>
        </PopupWindow>
      )}
    </>
  );
};

export default ShareButton;
