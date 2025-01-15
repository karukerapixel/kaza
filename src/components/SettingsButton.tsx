import React from 'react';
import Button from './Button';
import { useToggle } from 'hooks/useToggle';
import { CSSProperties } from 'styled-components';
import { FiSettings } from 'react-icons/fi';
import PopupWindow from './PopupWindow';
import ShareButton from './ShareButton';
import FavButton from './FavButton';

type SettingsButtonProps = {
  id: string;
  style?: CSSProperties;
};

const SettingsButton: React.FC<SettingsButtonProps> = ({ id, style }) => {
  const [isOpen, toggle] = useToggle();
  const buttonStyle = {
    width: '100%',
    color: 'white',
    backgroundColor: '#ff6060',
    border: '1px solid #f7f7f7',
    borderRadius: 5,
    padding: '10px 20px',
  };

  return (
    <>
      <Button icon={<FiSettings style={style} />} onClick={toggle} />
      {isOpen && (
        <PopupWindow isOpen={isOpen} onClose={toggle}>
          <ShareButton id={id} style={buttonStyle} />
          <FavButton id={id} text={true} style={buttonStyle} />
        </PopupWindow>
      )}
    </>
  );
};

export default SettingsButton;
