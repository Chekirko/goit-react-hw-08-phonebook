import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsRefreshing } from 'redux/selectors';
import { refreshUser } from 'redux/operations';
import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header';
import { Wrapper } from './App.styled';
import { ThemeProvider } from '@mui/material';
import { theme } from 'shared/theme';

const App = function () {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <ThemeProvider theme={theme}>
        <Header />
        <Wrapper>
          <Layout />
        </Wrapper>
      </ThemeProvider>
    )
  );
};

export default App;
