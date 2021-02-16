import { render } from '../../../../test-utils';
import { screen } from '@testing-library/react';
import CardContent from './CardContent';
import 'jest-styled-components';

const person = {
  id: 'abc',
  name: 'Luke Skywalker',
  height: 172,
  birthYear: '19XX',
  eyeColor: 'brown',
  homeworld: {
    name: 'Earth'
  }
};

const starship = {
  id: 'c3RhcnNoaXBzOjI=',
  name: 'CR90 corvette',
  hyperdriveRating: 2,
  model: 'CR90 corvette',
  starshipClass: 'corvette',
  length: 150,
  crew: '30-165'
};

describe('CardContent', () => {
  it('should match the snapshot with person details', () => {
    const { container } = render(
      <CardContent
        title="Your Card"
        selectedCategory="People"
        person={person}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should match the snapshot with starship details', () => {
    const { container } = render(
      <CardContent
        title="Your Card"
        selectedCategory="Starships"
        starship={starship}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should render the Card Content with Person details', () => {
    render(
      <CardContent
        title="Your Card"
        selectedCategory="People"
        person={person}
      />
    );
    const titleElement = screen.getByRole('heading', { name: 'Your Card' });
    const nameTextElement = screen.getByText('Luke Skywalker');
    const heightTextElement = screen.getByText('Height: 172cm');
    expect(titleElement).toBeInTheDocument();
    expect(nameTextElement).toBeInTheDocument();
    expect(heightTextElement).toBeInTheDocument();
  });
  it('should render the Card Content with Starship details', () => {
    render(
      <CardContent
        title="Your Card"
        selectedCategory="Starships"
        starship={starship}
      />
    );
    const titleElement = screen.getByRole('heading', { name: 'Your Card' });
    const nameTextElement = screen.getByText('CR90 corvette');
    const hyperdriveRatingElement = screen.getByText('Hyper Drive Rating: 2');
    expect(titleElement).toBeInTheDocument();
    expect(nameTextElement).toBeInTheDocument();
    expect(hyperdriveRatingElement).toBeInTheDocument();
  });
});
