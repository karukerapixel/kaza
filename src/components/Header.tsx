import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogo, HeaderWrapper } from '../styles/Header';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Link to={'/'}>
        <HeaderLogo src={logo} alt="logo du site" />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
