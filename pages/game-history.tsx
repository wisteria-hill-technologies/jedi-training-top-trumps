import Head from 'next/head';
import { FC } from 'react';
import { initializeApollo } from '@/common/apollo';
import { GetStaticProps } from 'next';
import GameHistory from '@/pages/GameHistory';
import { PEOPLE_QUERY } from '@/pages/GameHistory/apollo';
import PageLayout from '@/common/PageLayout';

const GameHistoryPage: FC = () => {
  return (
    <PageLayout>
      <Head>
        <title>Jedi Training - Game History</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <GameHistory />
    </PageLayout>
  );
};

// for server side rendering
export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PEOPLE_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
};

export default GameHistoryPage;