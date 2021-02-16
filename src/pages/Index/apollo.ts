import { gql } from '@apollo/client';

export const GAME_RECORDS_QUERY = gql`
  {
    game_records {
      record_id
      record_date
      game_mode
      category
      winner
      loser
      record_date
    }
  }
`;
