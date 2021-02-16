import Head from 'next/head';
import { FC } from 'react';
import { initializeApollo } from '@/common/apollo';
import { GetStaticProps } from 'next';
import GameHistory from '@/pages/GameHistory';
import { GAME_RECORDS_QUERY } from '@/pages/GameHistory/apollo';
import PageContainer from '@/common/PageLayout/PageContainer';

const GameHistoryPage: FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Jedi Training - Game History</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <GameHistory />
    </PageContainer>
  );
};

// for server side rendering
export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GAME_RECORDS_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  };
};

export default GameHistoryPage;
