import Head from 'next/head';
import { FC } from 'react';
import People from '@/pages/People';
import PageContainer from '@/common/PageLayout/PageContainer';

const PeoplePage: FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Jedi Training - Star Wars Top Trumps</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <People />
    </PageContainer>
  );
};

export default PeoplePage;