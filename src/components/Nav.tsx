import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About GS</NavItem>
    </NavBarContainer>
  );
};

interface NavItemProps {
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  return (
    <StyledLink exact activeClassName="active" to={to}>
      {children}
    </StyledLink>
  );
};

const NavBarContainer = styled.nav`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 0.3em;
  text-decoration: none;
  color: black;
  font-weight: bold;
  filter: opacity(0.7);

  :hover,
  &.active {
    filter: opacity(1);
  }
`;

export default NavBar;
