import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { PopupWindowContent, PopupWindowWrapper } from 'styles/PopupWindow';
import Button from './Button';

type PopupWindowProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const PopupWindow: React.FC<PopupWindowProps> = ({ isOpen, onClose, title, children }) => {
  // Define elements style
  const iconElement = <FaWindowClose style={{ color: 'grey', width: 20, height: 20 }} />;
  const buttonStyle = { backgroundColor: 'transparent' };

  return (
    <PopupWindowWrapper onClick={onClose}>
      <PopupWindowContent isclosing={`${!isOpen}`} onClick={(e) => e.stopPropagation()}>
        {title && (
          <div>
            <h2>{title}</h2>
            <Button icon={iconElement} onClick={onClose} style={buttonStyle} />
          </div>
        )}
        {children}
      </PopupWindowContent>
    </PopupWindowWrapper>
  );
};

export default PopupWindow;
