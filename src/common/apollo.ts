import fetch from 'cross-fetch';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';
import { useMemo } from 'react';
import { WebSocketLink } from '@apollo/client/link/ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import * as ws from 'ws';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const httpLink = new HttpLink({
  uri: 'https://jedi-training-sw-top-trumps.herokuapp.com/v1/graphql',
  fetch
});

const websocketOptions = {
  lazy: true,
  reconnect: true
};

const createWSLink = (impl?: any): WebSocketLink => {
  return new WebSocketLink(
    new SubscriptionClient(
      'wss://jedi-training-sw-top-trumps.herokuapp.com/v1/graphql',
      websocketOptions,
      impl
    )
  );
};

const wsLink =
  typeof window === 'undefined' ? createWSLink(ws) : createWSLink();

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: typeof window === 'undefined' ? httpLink : wsLink,
    cache: new InMemoryCache()
  });
};

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === 'undefined') return _apolloClient;

  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(
  initialState: NormalizedCacheObject | null = null
): ApolloClient<NormalizedCacheObject> {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
