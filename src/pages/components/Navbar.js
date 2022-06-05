import React from 'react';
import styled from 'styled-components';
import { Link, Routes } from 'react-router-dom';
import { menuData } from '../../Data/MenuData';

const Nav = styled.nav`
height: 60px;
background:red;
justify-content: space-between;
`;

const Logo = styled(Link) `
`;

const MenuBars = styled.i `
`;

const NavMenu = styled.div`
height: 60px;
background:green;
`;

const NavMenuLinks = styled(Link) `

`;

const Navbar = () => {
  return (
    <Routes>
    <Nav>
      <Logo to="/">Ingles on Fire</Logo>
      <MenuBars>
      <NavMenu>
        {menuData.map((item,index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      </MenuBars>
    </Nav>
    </Routes>
  );
};

export default Navbar;