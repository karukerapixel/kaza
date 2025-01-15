import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import {
  PopupWindowButton,
  PopupWindowContent,
  PopupWindowWrapper,
} from 'styles/PopupWindow';

type PopupWindowProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const PopupWindow: React.FC<PopupWindowProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <PopupWindowWrapper onClick={onClose}>
      <PopupWindowContent
        isClosing={!isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <PopupWindowButton type="button" onClick={onClose}>
          <FaWindowClose style={{ color: 'grey', width: 20, height: 20 }} />
        </PopupWindowButton>
        {children}
      </PopupWindowContent>
    </PopupWindowWrapper>
  );
};

export default PopupWindow;
