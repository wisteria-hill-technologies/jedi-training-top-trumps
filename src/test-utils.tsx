import React, { FC, Fragment } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import theme from './theme/index';
import { useApollo } from './common/apollo';
import GlobalStyle from './theme/GlobalStyle';

interface InitialApolloState {
  initialApolloState?: any;
}

const AllTheProviders: FC<InitialApolloState> = ({
  children,
  initialApolloState
}) => {
  const client = useApollo(initialApolloState);

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
