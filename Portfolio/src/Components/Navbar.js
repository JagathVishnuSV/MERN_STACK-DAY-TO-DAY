import React from 'react';
import styled from 'styled-components';

const Navbar = ({ onNavigate }) => {
  return (
    <Nav>
      <Logo>
        <img src="Logo.jpg" alt="Logo" />
      </Logo>
      <Menu>
        <a onClick={() => onNavigate('home')}>Home</a>
        <a onClick={() => onNavigate('about')}>About</a>
        <a onClick={() => onNavigate('portfolio')}>Projects</a>
        <a onClick={() => onNavigate('contact')}>Contact</a>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #f7f7f7;
`;

const Logo = styled.div`
  img {
    height: 40px;  // Adjust the height as per your preference
    width: auto;  // Maintain the aspect ratio
  }
`;

const Menu = styled.div`
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: black;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: #007bff;
    }
  }
`;
