import { gql } from '@apollo/client';

export const PEOPLE_QUERY = gql`
  {
    allPeople {
      totalCount
      people {
        name
      }
    }
  }
`;
