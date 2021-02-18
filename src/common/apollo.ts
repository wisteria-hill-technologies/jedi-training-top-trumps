import fetch from 'cross-fetch';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  useQuery,
  useSubscription
} from '@apollo/client';
import { useMemo } from 'react';
import { WebSocketLink } from '@apollo/client/link/ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import * as ws from 'ws';
import {
  GAME_RECORDS_QUERY,
  GAME_RECORDS_SUBSCRIPTION
} from '@/pages/GameHistory/apollo';

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

export const useQueryOrSubscription = () => {
  const isTest = process.env.NODE_ENV === 'test';
  const { data: queryData, loading: queryLoading } = useQuery(
    GAME_RECORDS_QUERY,
    {
      skip: !isTest
    }
  );
  const {
    data: subscriptionData,
    loading: subscriptionLoading
  } = useSubscription(GAME_RECORDS_SUBSCRIPTION, {
    skip: isTest
  });

  const loading = isTest ? queryLoading : subscriptionLoading;
  const data = isTest ? queryData : subscriptionData;
  return { data, loading };
};
