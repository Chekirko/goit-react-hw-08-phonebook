import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { register } from 'redux/operations';
import {
  RegWrapper,
  ErrorText,
  RegTitle,
  RegisterForm,
  FormInput,
  FormLabel,
  SubmitBtn,
} from './RegisterPage.styled';
import { getAuthError } from 'redux/selectors';

export const RegisterPage = () => {
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  return (
    <RegWrapper>
      <RegTitle>Have no account? Sign up!</RegTitle>
      {error && <ErrorText>Something went wrong, try again!</ErrorText>}
      <RegisterForm onSubmit={handleSubmit}>
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

        <SubmitBtn type="submit">Sign up</SubmitBtn>
      </RegisterForm>
    </RegWrapper>
  );
};
