import React from 'react';
import { useToggle } from 'hooks/useToggle';
import { FaFacebook, FaShareAlt, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Button from './Button';
import PopupWindow from './PopupWindow';
import { CSSProperties } from 'styled-components';

type ShareButtonProps = {
  id: string;
  style?: CSSProperties;
};

const ShareButton: React.FC<ShareButtonProps> = ({ id, style }) => {
  const [isOpen, toggle] = useToggle();
  const url = 'https://karukerapixel.github.io/kaza/#/housings/';
  const text = 'Ce logement est superbe ! Venez le découvrir en cliquant sur le lien suivant : ';
  const iconStyle = { color: 'white' };
  const buttonStyle = {
    color: 'white',
    backgroundColor: '#ff6060',
    border: '1px solid #f7f7f7',
    borderRadius: 5,
    padding: '10px 20px',
  };

  const handleClick = (platform: 'whatsapp' | 'twitter' | 'facebook') => {
    let shareUrl = '';

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + url + id)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url + id)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url + id)}`;
        break;
      default:
        console.error('Unsupported platform');
        return;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Button icon={<FaShareAlt />} text={'Partager'} onClick={toggle} style={style} />
      {isOpen && (
        <PopupWindow title="Partager cette annonce" isOpen={isOpen} onClose={toggle}>
          <div>
            <Button icon={<FaWhatsapp style={iconStyle} />} text={'WhatsApp'} onClick={() => handleClick('whatsapp')} style={buttonStyle} />
            <Button icon={<FaTwitter style={iconStyle} />} text={'Twitter'} onClick={() => handleClick('twitter')} style={buttonStyle} />
            <Button icon={<FaFacebook style={iconStyle} />} text={'Facebook'} onClick={() => handleClick('facebook')} style={buttonStyle} />
          </div>
        </PopupWindow>
      )}
    </>
  );
};

export default ShareButton;
