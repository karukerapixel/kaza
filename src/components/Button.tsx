import React, { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import { ButtonWrapper } from 'styles/Button';

type ButtonProps = {
  ariaLabel?: string;
  icon: ReactNode;
  text?: ReactNode;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Ajouter le type pour onClick
};

const Button: React.FC<ButtonProps> = ({
  ariaLabel,
  icon,
  text,
  onClick,
  style,
}) => {
  return (
    <ButtonWrapper
      type="button"
      aria-label={ariaLabel}
      style={style}
      onClick={onClick}
    >
      {icon}
      {text && <span>{text}</span>}
    </ButtonWrapper>
  );
};

export default Button;
