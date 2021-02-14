import Head from 'next/head';
import { FC } from 'react';
import Index from '@/pages/Index';
import PageLayout from '@/common/PageLayout';

const IndexPage: FC = () => {
  return (
    <PageLayout>
      <Head>
        <title>Jedi Training - Star Wars Top Trumps</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Index />
    </PageLayout>
  );
};

export default IndexPage;
