import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { logIn } from 'redux/operations';

export const LoginPage = () => {
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
    setName('');
    setEmail('');
    setPassword('');
  };

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInputId">Name</label>
        <input
          type="text"
          name="inputName"
          value={name}
          onChange={handleChange}
          id={nameInputId}
        />

        <label htmlFor="emailInputId">Email</label>
        <input
          type="email"
          name="inputEmail"
          value={email}
          onChange={handleChange}
          id={emailInputId}
        />

        <label htmlFor="passwordInputId">Password</label>
        <input
          type="password"
          name="inputPassword"
          value={password}
          onChange={handleChange}
          id={passwordInputId}
        />

        <button type="submit">Sign up</button>
      </form>
    </>
  );
};
