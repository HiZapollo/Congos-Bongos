import { gql } from '@apollo/client';

export const QUERY_ALL_BONGOS = gql`
  query allBongos {
    bongos {
      id
      name
      description
      image
      quantity
      price
      types {
        id
        name
      }
    }
  }
`;

export const QUERY_BONGO = gql`
  query bongo($id: ID!) {
    bongo(id: $id) {
      id
      name
      description
      image
      quantity
      price
      types {
        id
        name
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      username
      email
      savedBongos {
        purchaseDate
        Bongos {
          id
          name
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      id
      username
      email
      savedBongos {
        purchaseDate
        Bongos {
          id
          name
        }
      }
    }
  }
`;
