import { gql } from '@apollo/client';

export const MUTATION_ADD_BONGO = gql`
  mutation addBongo($input: BongoInput!) {
    addBongo(input: $input) {
      id
      name
      description
    }
  }
`;

export const MUTATION_UPDATE_BONGO = gql`
  mutation updateBongo($id: ID!, $input: BongoInput!) {
    updateBongo(id: $id, input: $input) {
      id
      name
      description
    }
  }
`;

export const MUTATION_DELETE_BONGO = gql`
  mutation deleteBongo($id: ID!) {
    deleteBongo(id: $id) {
      id
    }
  }
`;

export const MUTATION_SIGNUP_USER = gql`
  mutation signup($input: SignupInput!) {
    signup(input: $input) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const MUTATION_LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const MUTATION_ADD_ORDER = gql`
  mutation addOrder($bongos: [ID!]!) {
    addOrder(bongos: $bongos) {
      purchaseDate
      Bongos {
        id
        name
      }
    }
  }
`;
