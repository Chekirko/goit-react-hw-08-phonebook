import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { logIn } from 'redux/operations';
import {
  LoginForm,
  LogWrapper,
  LogTitle,
  FormInput,
  FormLabel,
  SubmitBtn,
  ErrorText,
} from './LoginPage.styled';
import { getAuthError } from 'redux/selectors';

export const LoginPage = () => {
  const error = useSelector(getAuthError);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'inputName':
        setName(value);
        break;

      case 'inputEmail':
        setEmail(value);
        break;

      case 'inputPassword':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ name, email, password }));
    if (error) {
      return;
    }
    setName('');
    setEmail('');
    setPassword('');
  };

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  return (
    <>
      <LogWrapper>
        <LogTitle>Login, please</LogTitle>
        {error && <ErrorText>Something went wrong, try again!</ErrorText>}
        <LoginForm onSubmit={handleSubmit}>
          <FormLabel htmlFor="nameInputId">Name</FormLabel>
          <FormInput
            type="text"
            name="inputName"
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />

          <FormLabel htmlFor="emailInputId">Email</FormLabel>
          <FormInput
            type="email"
            name="inputEmail"
            value={email}
            onChange={handleChange}
            id={emailInputId}
          />

          <FormLabel htmlFor="passwordInputId">Password</FormLabel>
          <FormInput
            type="password"
            name="inputPassword"
            value={password}
            onChange={handleChange}
            id={passwordInputId}
          />

          <SubmitBtn type="submit">Sign in</SubmitBtn>
        </LoginForm>
      </LogWrapper>
    </>
  );
};
