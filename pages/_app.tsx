import { ApolloProvider } from '@apollo/client';
import '../styles/globals.css';
import { useApollo } from 'src/apollo';
import { FC } from 'react';
import type { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
