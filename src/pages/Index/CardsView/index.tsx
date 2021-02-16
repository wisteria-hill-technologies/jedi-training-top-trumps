import { FC, useState, useEffect, Fragment } from 'react';
import { A, Div, H1, H2, H3, P } from '@/common/AtomicElements';
import Button from '@/common/AtomicElements/Button';
import MessageBox from '@/common/MessageBox';
import Card from '@/common/Card';
import { SINGLE_PLAYER, PEOPLE } from '@/pages/Index/CONSTANTS';
import { GET_PERSON, GET_STARSHIP } from './apollo';
import { randomInteger } from '@/common/utils';
import { useApolloClient } from '@apollo/client';
import fallbackPersonData from './fallbackPersonData.json';
import fallbackStarshipData from './fallbackStarshipData.json';
import CardContent from '@/pages/Index/CardsView/CardContent/CardContent';
import Link from 'next/link';

interface Props {
  gameMode: string;
  selectedCategory: string;
  players: string[];
  handleResetGame: () => void;
}

interface Person {
  id: string;
  name: string;
  height: number;
  birthYear?: string;
  eyeColor?: string;
  homeworld?: {
    name?: string;
  };
}

interface Starship {
  id: string;
  name: string;
  hyperdriveRating: number;
  model?: string;
  starshipClass?: string;
  length?: number;
  crew?: string;
  passengers?: string;
}

interface GameResult {
  winner: string;
  loser: string;
  isDraw: boolean;
  timestamp: string;
}

interface PlayerCard {
  person?: Person;
  starship?: Starship;
}

const CardsView: FC<Props> = ({
  gameMode,
  selectedCategory,
  players,
  handleResetGame
}) => {
  const client = useApolloClient();
  const isSinglePlayerGame = gameMode === SINGLE_PLAYER;
  const gameModeTitle = isSinglePlayerGame
    ? 'You Vs Darth Vader'
    : 'Jedi Vs Jedi';

  const [player1Card, setPlayer1Card] = useState<PlayerCard | any>(null);
  const [player2Card, setPlayer2Card] = useState<PlayerCard | any>(null);

  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const compareCardDetails = (player1Value = 0, player2Value = 0) => {
    const winner =
      player1Value > player2Value
        ? players[0]
        : player1Value === player2Value
        ? ''
        : players[1];
    const loser =
      winner === players[0]
        ? players[1]
        : winner === players[1]
        ? players[0]
        : '';
    const timestamp = new Date().toISOString();
    const isDraw = !winner && !loser;
    return { winner, loser, isDraw, timestamp };
  };

  useEffect(() => {
    let mounted = true;
    if (isSinglePlayerGame && player1Card) {
      mounted && getItem(selectedCategory, 1);
    }
    return () => {
      mounted = false;
    };
  }, [player1Card, isSinglePlayerGame]);

  useEffect(() => {
    if (player1Card && player2Card) {
      // compare details and record game result
      if (selectedCategory === PEOPLE) {
        const player1Person = player1Card?.person;
        const player2Person = player2Card?.person;
        if ('height' in player1Person && 'height' in player2Person) {
          const newGameResult = compareCardDetails(
            player1Person?.height,
            player2Person?.height
          );
          setGameResult(newGameResult);
        }
      } else {
        const player1Starship = player1Card?.starship;
        const player2Starship = player2Card?.starship;
        if (
          'hyperdriveRating' in player1Starship &&
          'hyperdriveRating' in player2Starship
        ) {
          const newGameResult = compareCardDetails(
            player1Starship?.hyperdriveRating,
            player2Starship?.hyperdriveRating
          );
          setGameResult(newGameResult);
        }
      }
    }
  }, [player1Card, player2Card]);

  const getItem = async (category: string, index: number) => {
    const isPeopleCategory = category === PEOPLE;
    const variables = isPeopleCategory
      ? { personId: randomInteger(1, 82) }
      : { starshipId: randomInteger(1, 36) };
    const { data, errors } = await client.query({
      query: isPeopleCategory ? GET_PERSON : GET_STARSHIP,
      variables,
      errorPolicy: 'all'
    });
    const hasError = errors && errors?.length > 0;
    const fallbackData = isPeopleCategory
      ? fallbackPersonData
      : fallbackStarshipData;
    const categoryData = isPeopleCategory ? data?.person : data?.starship;
    if (index === 0) {
      const card = hasError || !categoryData ? fallbackData : data;
      setPlayer1Card(card);
    } else {
      const card = hasError || !categoryData ? fallbackData : data;
      setPlayer2Card(card);
    }
  };

  const handleFetchData = async (index: number) => {
    await getItem(selectedCategory, index);
  };

  const { winner, loser, isDraw, timestamp } = gameResult || {};
  const player1Name = isSinglePlayerGame ? 'You' : players[0];
  const player2Name = players[1];
  const gameResultStatement = isDraw
    ? 'The Game is a draw!'
    : `${player1Name} ${
        players[0] === winner ? 'WON! ' : 'Lost! '
      } ${player2Name}  ${players[1] === winner ? 'WON! ' : 'Lost! '}`;

  let messageVariant = 'primary';
  if (isDraw) {
    messageVariant = 'warning';
  }
  if (isSinglePlayerGame && players[1] === winner) {
    messageVariant = 'danger';
  }

  return (
    <Div textAlign="center" width="100%">
      <H1>{gameModeTitle}</H1>
      <H2>Category: {selectedCategory}</H2>
      {gameResult && (
        <Div>
          <MessageBox variant={messageVariant} message={gameResultStatement} />
          <P>
            <Button onClick={handleResetGame}>Play Again</Button>
          </P>
          <P>
            <Link href="/game-history" passHref>
              <A>Game History</A>
            </Link>
          </P>
        </Div>
      )}
      <Div p={3} display="flex" flexWrap="wrap" justifyContent="center">
        {players.map((player, index) => {
          const title =
            isSinglePlayerGame && index === 0
              ? 'Your Card'
              : `${player}'s Card`;
          const showButton = player !== 'Darth Vader';

          const cardContent = index === 0 ? player1Card : player2Card;
          return (
            <Card key={player}>
              {cardContent ? (
                <CardContent
                  title={title}
                  selectedCategory={selectedCategory}
                  {...cardContent}
                />
              ) : (
                <Fragment>
                  <H3>{title}</H3>
                  {showButton && (
                    <Button
                      onClick={() => handleFetchData(index)}
                      position="absolute"
                      bottom="1rem"
                    >
                      Flip Card
                    </Button>
                  )}
                </Fragment>
              )}
            </Card>
          );
        })}
      </Div>
    </Div>
  );
};

export default CardsView;
