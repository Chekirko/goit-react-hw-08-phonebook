import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';
import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header';
import { Wrapper } from './App.styled';

const App = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Wrapper>
        <Layout />
      </Wrapper>
    </>
  );
};

export default App;
