import { FC } from 'react';
import { A, Div, H1, H2 } from '@/common/AtomicElements';
import Link from 'next/link';
import Button from '@/common/AtomicElements/Button';
import { SINGLE_PLAYER, PEOPLE, STARSHIPS } from '@/pages/Index/CONSTANTS';

interface Props {
  gameMode: string;
  selectCategory: (category: string) => void;
}

const SelectCategoryView: FC<Props> = ({ gameMode, selectCategory }) => {
  const gameModeTitle =
    gameMode === SINGLE_PLAYER ? 'You Vs Darth Vader' : 'Jedi Vs Jedi';
  return (
    <Div textAlign="center" width="100%">
      <H1>{gameModeTitle}</H1>
      <H2>Select A Category</H2>
      <Div p={3} display="flex" flexDirection="column" alignItems="center">
        <Button onClick={() => selectCategory(PEOPLE)}>{PEOPLE}</Button>
        <Button onClick={() => selectCategory(STARSHIPS)}>{STARSHIPS}</Button>
      </Div>
    </Div>
  );
};

export default SelectCategoryView;
