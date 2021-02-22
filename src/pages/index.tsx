import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';
import styled from 'styled-components';
import store from 'store';
import StyledToast from 'components/StyledToast';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const Home = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <StyledToast />
      <PageContainer>
        <Login />
      </PageContainer>
    </ThemeProvider>
  </Provider>
);

export default Home;
