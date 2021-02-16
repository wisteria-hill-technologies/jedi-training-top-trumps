import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/common/apollo';
import { FC } from 'react';
import type { AppProps } from 'next/app';
import theme from '@/theme/index';
import GlobalStyle from '@/theme/GlobalStyle';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <Fragment>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </Fragment>
  );
};

export default MyApp;
