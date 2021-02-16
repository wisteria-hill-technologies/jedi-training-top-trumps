import React, { FC, Fragment } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import theme from './theme/index';
import { useApollo } from './common/apollo';
import GlobalStyle from './theme/GlobalStyle';
import { createMockClient } from 'mock-apollo-client';
import {GET_PERSON} from '@/pages/Index/CardsView/apollo';

interface InitialApolloState {
  initialApolloState?: any;
}

const AllTheProviders: FC<InitialApolloState> = ({
  children,
  initialApolloState
}) => {
  const mockClient = createMockClient();

  mockClient.setRequestHandler(GET_PERSON, () =>
    Promise.resolve({
      data: {
        person: {
          id: 'abc',
          name: 'Kickass',
          height: 172,
          birthYear: '19XX',
          eyeColor: 'brown',
          homeworld: {
            name: 'Earth'
          }
        }
      }
    })
  );

  return (
    <Fragment>
      <GlobalStyle />
      <ApolloProvider client={mockClient}>
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
