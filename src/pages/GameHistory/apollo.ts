import { gql } from '@apollo/client';

export const GAME_RECORDS_QUERY = gql`
  query gameRecords {
    game_records(order_by: { record_date: desc }, limit: 20) {
      record_id
      record_date
      game_mode
      category
      winner
      loser
    }
  }
`;

export const GAME_RECORDS_SUBSCRIPTION = gql`
  subscription gameRecords {
    game_records(order_by: { record_date: desc }, limit: 20) {
      category
      game_mode
      loser
      record_date
      record_id
      winner
    }
  }
`;
