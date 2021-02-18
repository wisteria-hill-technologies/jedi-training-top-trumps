import { FC } from 'react';
import { A, Div, H1, H2, P } from '@/common/AtomicElements';
import { useQuery, useSubscription } from '@apollo/client';
import { GET_PEOPLE } from './apollo';
import Link from 'next/link';

interface Person {
  id: string;
  name: string;
}

const People: FC = () => {
  const { data, loading } = useQuery(GET_PEOPLE);
  return (
    <Div display="flex" flexDirection="column" alignItems="center" width="100%">
      <H1>Characters</H1>
      <H2>Star Wars Top Trumps</H2>
      <P>
        <Link href="/" passHref>
          <A>Home</A>
        </Link>
      </P>
      {loading ? (
        'Loading...'
      ) : (
        <Div textAlign="left">
          {data?.allPeople?.people.map(({ id, name }: Person) => {
            return (
              <P key={id} fontSize={4}>
                {name}
              </P>
            );
          })}
        </Div>
      )}
    </Div>
  );
};

export default People;
