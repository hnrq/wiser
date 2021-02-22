import 'styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import StyledToast from 'components/StyledToast';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import { Provider } from 'react-redux';
import store from 'store';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <StyledToast limit={3} />
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
      </ThemeProvider>
    </Provider>
  );
}
