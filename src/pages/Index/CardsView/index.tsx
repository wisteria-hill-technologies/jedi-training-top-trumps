import { FC } from 'react';
import { Div, H1, H2, H3, P } from '@/common/AtomicElements';
import Button from '@/common/AtomicElements/Button';
import Card from '@/common/Card';
import { SINGLE_PLAYER } from '@/pages/Index/CONSTANTS';

interface GameState {
  gameMode: string | null;
  selectedCategory: string;
  players: string[];
  winner: string;
  loser: string;
  timestamp: string;
}

interface Props {
  gameMode: string;
  selectedCategory: string;
  players: string[];
  setGameResult: (gameResult: GameState) => void;
}

const CardsView: FC<Props> = ({
  gameMode,
  selectedCategory,
  players,
  setGameResult
}) => {
  const isSinglePlayerGame = gameMode === SINGLE_PLAYER;
  const gameModeTitle = isSinglePlayerGame
    ? 'You Vs Darth Vader'
    : 'Jedi Vs Jedi';

  return (
    <Div textAlign="center">
      <H1>{gameModeTitle}</H1>
      <H2>Category: {selectedCategory}</H2>
      <Div p={3} display="flex" flexWrap="wrap" justifyContent="center">
        {players.map((player, index) => {
          const title =
            isSinglePlayerGame && index === 0 ? 'Your Card' : `${player}'s Card`;
          return (
            <Card key={player?.replace(' ', '_')}>
              <H3>{title}</H3>
              <Button
                backgroundColor="info.3"
                onClick={() => console.log('click')}
              >
                Flip Card
              </Button>
            </Card>
          );
        })}
      </Div>
    </Div>
  );
};

export default CardsView;
