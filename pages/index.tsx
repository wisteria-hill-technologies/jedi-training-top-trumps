import Head from 'next/head';
import { FC } from 'react';
import Index from '@/pages/Index';
import PageContainer from '@/common/PageLayout/PageContainer';

const IndexPage: FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Jedi Training - Star Wars Top Trumps</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Index />
    </PageContainer>
  );
};

export default IndexPage;
