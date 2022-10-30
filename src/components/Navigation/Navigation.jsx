import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { NavItem, NavList, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <NavList>
      <NavItem>
        <StyledLink to="/" end>
          Home
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </NavItem>
      {!isLoggedIn && (
        <>
          <NavItem>
            <StyledLink to="/login">Login</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/register">Registration</StyledLink>
          </NavItem>
        </>
      )}
    </NavList>
  );
};
