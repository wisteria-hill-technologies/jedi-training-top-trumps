import { FC } from 'react';
import { A, Div, H1, H2, P } from '@/common/AtomicElements';
import { useSubscription } from '@apollo/client';
import { GAME_RECORDS_SUBSCRIPTION } from './apollo';
import Link from 'next/link';

interface GameRecord {
  record_id: string;
  game_mode: string;
  category: string;
  winner: string;
  loser: string;
  record_date: string;
}

const GameHistory: FC = () => {
  const { data, loading } = useSubscription(GAME_RECORDS_SUBSCRIPTION);
  return (
    <Div display="flex" flexDirection="column" alignItems="center" width="100%">
      <H1>Game History</H1>
      <H2>Star Wars Top Trumps</H2>
      <P fontWeight="bold" fontSize={3}>
        If the game is unresponsive, the server may be asleep. Please wait up to
        a minute or so.
      </P>
      <P>
        <Link href="/" passHref>
          <A>Home</A>
        </Link>
      </P>
      {loading ? (
        'Loading...'
      ) : (
        <Div textAlign="left">
          {data?.game_records.map(
            ({
              record_id,
              game_mode,
              category,
              winner,
              loser,
              record_date
            }: GameRecord) => {
              const displayDate = record_date
                ? new Date(record_date).toLocaleString()
                : '';
              const winningStatement =
                !winner && !loser
                  ? `Draw!`
                  : `Winner: ${winner} - Loser: ${loser}`;
              const resultStatement = `Game Mode: ${game_mode} - Category: ${category} - ${winningStatement} - ${displayDate}`;

              return (
                <P key={record_id} fontSize={4}>
                  {resultStatement}
                </P>
              );
            }
          )}
        </Div>
      )}
    </Div>
  );
};

export default GameHistory;
