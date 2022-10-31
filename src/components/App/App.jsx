import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsRefreshing } from 'redux/selectors';
import { refreshUser } from 'redux/operations';
import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header';
import { Wrapper } from './App.styled';

const App = function () {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Header />
        <Wrapper>
          <Layout />
        </Wrapper>
      </>
    )
  );
};

export default App;
