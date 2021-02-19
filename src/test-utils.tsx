import React, { FC, Fragment } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client';
import theme from './theme/index';
import GlobalStyle from './theme/GlobalStyle';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import fetch from 'whatwg-fetch';

interface InitialApolloState {
  initialApolloState?: any;
}

const httpLink = new HttpLink({
  uri: 'https://jedi-training-sw-top-trumps.herokuapp.com/v1/graphql',
  fetch
});

const AllTheProviders: FC<InitialApolloState> = ({
  children,
  initialApolloState
}) => {
  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: httpLink,
    cache: new InMemoryCache()
  });

  return (
    <Fragment>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ApolloProvider>
    </Fragment>
  );
};

const customRender = (
  ui: React.ReactElement,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  wrapperProps?: any,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult =>
  render(ui, {
    wrapper: function wrapper(props) {
      return <AllTheProviders {...props} {...wrapperProps} />;
    },
    ...options
  });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
