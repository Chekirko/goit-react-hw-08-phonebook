import { Routes, Route } from 'react-router-dom';
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
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<p>Sorry, something went wrong</p>}></Route>
      </Routes>
    </Container>
  );
};
