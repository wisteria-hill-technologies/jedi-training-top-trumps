import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
  query getPeople {
    allPeople {
      people {
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
  }
`;
