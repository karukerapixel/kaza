import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../styles/GlobalStyle';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
