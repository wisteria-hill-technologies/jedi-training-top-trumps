import Head from 'next/head';
import { FC } from 'react';
import Index from '@/pages/Index';

const IndexPage: FC = () => {
  return (
    <div>
      <Head>
        <title>Jedi Training - Star Wars Top Trumps</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Index />
    </div>
  );
};

export default IndexPage;
