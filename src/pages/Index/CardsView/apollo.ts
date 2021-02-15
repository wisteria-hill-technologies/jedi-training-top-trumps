import { gql } from '@apollo/client';

export const GET_PERSON = gql`
  query getPerson($personId: ID) {
    person(personID: $personId) {
      id
      name
      height
      birthYear
      eyeColor
      homeworld {
        name
      }
    }
  }
`;

export const GET_STARSHIP = gql`
  query getStarship($starshipId: ID) {
    starship(starshipID: $starshipId) {
      id
      name
      hyperdriveRating
      model
      starshipClass
      length
      crew
      passengers
    }
  }
`;
