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

export const ADD_GAME_RECORD = gql`
  mutation addGameRecord(
    $game_mode: game_mode
    $category: category
    $winner: String
    $loser: String
  ) {
    insert_game_records_one(
      object: {
        game_mode: $game_mode
        category: $category
        winner: $winner
        loser: $loser
      }
    ) {
      record_id
    }
  }
`;
