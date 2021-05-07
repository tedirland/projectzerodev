import { gql } from '@apollo/client';

export const CREATE_COUNTY = gql`
  mutation CreateCounty {
    createCounty(
      input: {
        name: "Sanilac"
        countySeat: "Sandusky"
        website: "www.hired.com"
        population: "41,295"
        description: "Test text"
      }
    ) {
      _id
      name
      countySeat
      website
      population
      description
    }
  }
`;

export const UPDATE_COUNTY = gql`
  mutation UpdateCounty($id: ID) {
    updateCounty(
      id: $id
      input: {
        name: "Updated Name"
        countySeat: "Updatedsberg"
        website: "Updated Website"
        population: "Updated"
        description: "Updated Desc"
      }
    ) {
      _id
      name
      countySeat
      website
      population
      description
    }
  }
`;

export const DELETE_COUNTY = gql`
  mutation DeleteCounty($id: ID) {
    deleteCounty(id: $id)
  }
`;
