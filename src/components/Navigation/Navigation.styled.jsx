import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #ff7a05;
  font-size: 25px;
  text-decoration: none;
  transition-property: background-color;

  /* @media screen and (max-width: 768.98px) */

  &:hover {
    color: white;
  }

  &.active {
    color: #fff;
  }
`;

export const NavList = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
