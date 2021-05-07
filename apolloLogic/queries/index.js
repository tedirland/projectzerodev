import { gql } from '@apollo/client';

export const GET_COUNTY = gql`
  query County($id: ID) {
    county(id: $id) {
      _id
      name
      countySeat
      website
      population
      description
    }
  }
`;

export const GET_COUNTIES = gql`
  query Counties {
    counties {
      _id
      name
      countySeat
      website
      population
      description
    }
  }
`;
