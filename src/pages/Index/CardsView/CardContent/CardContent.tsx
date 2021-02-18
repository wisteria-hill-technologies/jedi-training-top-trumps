import { FC } from 'react';
import { PEOPLE } from '@/pages/Index/CONSTANTS';
import { Div, H3, P } from '@/common/AtomicElements';

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
}

interface Props {
  title: string;
  selectedCategory: string;
  person?: Person;
  starship?: Starship;
}

const CardContent: FC<Props> = ({
  title,
  selectedCategory,
  person,
  starship
}) => {
  if (selectedCategory === PEOPLE) {
    const { name, height, birthYear, eyeColor, homeworld } = person || {};
    return (
      <Div>
        <H3>{title}</H3>
        <P fontSize={6}>{name}</P>
        <P fontSize={5} fontWeight="bold">
          Height: {height}cm
        </P>
        <P fontSize={3} m={0}>
          Birth Year: {birthYear}
        </P>
        <P fontSize={3} m={0}>
          Eye Color: {eyeColor}
        </P>
        <P fontSize={3} m={0}>
          Home World: {homeworld?.name}
        </P>
      </Div>
    );
  } else {
    const { name, hyperdriveRating, model, starshipClass, length, crew } =
      starship || {};
    return (
      <Div>
        <H3>{title}</H3>
        <P fontSize={5} m={0}>
          {name}
        </P>
        <P fontSize={5} fontWeight="bold">
          Hyper Drive Rating: {hyperdriveRating}
        </P>
        <P fontSize={3} m={0}>
          Model: {model}
        </P>
        <P fontSize={3} m={0}>
          Starship Class: {starshipClass}
        </P>
        <P fontSize={3} m={0}>
          length: {length}m
        </P>
        <P fontSize={3} m={0}>
          Crew: {crew}
        </P>
      </Div>
    );
  }
};

export default CardContent;
