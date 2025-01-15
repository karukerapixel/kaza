import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBarWrapper } from 'styles/NavBar';

const NavBar: React.FC = () => {
    return (
        <NavBarWrapper>
            <NavLink to={'/fav-housings'}>Favoris</NavLink>
        </NavBarWrapper>
    );
}

export default NavBar;
