import { FC } from 'react';
import { A, Div, H1, H2 } from '@/common/AtomicElements';
import Link from 'next/link';
import Button from '@/common/AtomicElements/Button';
import { SINGLE_PLAYER, TWO_PLAYERS } from '@/pages/Index/CONSTANTS';

interface Props {
  selectGameMode: (gameMode: string) => void;
}

const InitialView: FC<Props> = ({ selectGameMode }) => {
  return (
    <Div textAlign="center">
      <H1>Jedi Training</H1>
      <H2>Star Wars Top Trumps</H2>
      <Link href="/game-history" passHref>
        <A>Game History</A>
      </Link>
      <Div p={3} display="flex" flexDirection="column">
        <Button onClick={() => selectGameMode(SINGLE_PLAYER)}>
          Play against Darth Vader
        </Button>
        <Button onClick={() => selectGameMode(TWO_PLAYERS)}>
          2 Jedi Players
        </Button>
      </Div>
    </Div>
  );
};

export default InitialView;
