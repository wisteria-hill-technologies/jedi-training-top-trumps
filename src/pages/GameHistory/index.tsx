import { FC } from 'react';
import {A, Div, H1, P} from '@/common/AtomicElements';
import { useQuery } from '@apollo/client';
import { PEOPLE_QUERY } from './apollo';
import Link from 'next/link';

const GameHistory: FC = () => {
  const { data, loading } = useQuery(PEOPLE_QUERY);
  return (
    <Div width="100%">
      <H1>Game History</H1>
      <P>
        <Link href="/" passHref>
          <A>Home</A>
        </Link>
      </P>
      {loading ? 'Loading...' : JSON.stringify(data, null, 2)}
    </Div>
  );
};

export default GameHistory;
