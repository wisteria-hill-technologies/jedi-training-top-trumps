import { FC, useState } from 'react';
import InitialView from '@/pages/Index/InitialView';
import SelectCategoryView from '@/pages/Index/SelectCategoryView';
import CardsView from '@/pages/Index/CardsView';
import { SINGLE_PLAYER, TWO_PLAYERS } from '@/pages/Index/CONSTANTS';

const initialGameState = {
  gameMode: null,
  selectedCategory: '',
  players: [],
  winner: '',
  loser: '',
  timestamp: ''
};

interface GameState {
  gameMode: string | null;
  selectedCategory: string;
  players: string[];
  winner: string;
  loser: string;
  timestamp: string;
}

const Index: FC = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const { gameMode, selectedCategory, players, winner, loser, timestamp } =
    gameState || {};

  const selectGameMode = (gameMode: string) => {
    setGameState((prevState) => ({
      ...prevState,
      gameMode,
      players:
        gameMode === SINGLE_PLAYER
          ? ['Jedi Player 1', 'Darth Vader']
          : ['Jedi Player 1', 'Jedi Player 2']
    }));
  };

  const selectCategory = (selectedCategory: string) => {
    setGameState((prevState) => ({
      ...prevState,
      selectedCategory
    }));
  };

  const setGameResult = (gameResult: GameState) => {
    setGameState(gameResult);
  };

  if (gameMode === null) {
    return <InitialView selectGameMode={selectGameMode} />;
  }

  if (!selectedCategory) {
    return (
      <SelectCategoryView gameMode={gameMode} selectCategory={selectCategory} />
    );
  } else {
    return (
      <CardsView
        gameMode={gameMode}
        selectedCategory={selectedCategory}
        players={players}
        setGameResult={setGameResult}
      />
    );
  }
};

export default Index;
