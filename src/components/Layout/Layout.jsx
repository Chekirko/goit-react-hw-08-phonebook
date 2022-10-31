import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

import { HomePage } from 'pages/homePage/HomePage';
import { ContactsPage } from 'pages/contactsPage/ContactsPage';
import { RegisterPage } from 'pages/registerPage/RegisterPage';
import { LoginPage } from 'pages/loginPage/LoginPage';
import { Container } from 'shared/Container.styled';

export const Layout = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
              restricted
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<LoginPage />}
              restricted
            />
          }
        />
        <Route path="*" element={<p>Sorry, something went wrong</p>}></Route>
      </Routes>
    </Container>
  );
};
