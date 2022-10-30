import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Logo, StyledHeader, Wrapper } from './Header.styled';
import { Container } from 'shared/Container.styled';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Logo>PhoneBook</Logo>
          <Navigation />
          {isLoggedIn && <UserMenu />}
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};
