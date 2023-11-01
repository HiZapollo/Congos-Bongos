import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation AddUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BONGO = gql`
    mutation SaveBongo($input: BongoInput!) {
        saveBongo(input: $input) {
            _id
            username
            savedBongos {
                _id
                name
            }
        }
    }
`;

export const REMOVE_BONGO = gql`
    mutation RemoveBongo($bongoId: ID!) {
        removeBongo(bongoId: $bongoId) {
            _id
            username
            savedBongos {
                _id
                name
            }
        }
    }
`;

export const ADD_ORDER = gql`
    mutation AddOrder($Bongos: [ID]!) {
        addOrder(Bongos: $Bongos) {
            _id
            purchaseDate
            Bongos {
                _id
                name
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation UpdateUser($username: String, $email: String) {
        updateUser(username: $username, email: $email) {
            _id
            username
            email
        }
    }
`;

export const UPDATE_BONGO = gql`
    mutation UpdateBongo($_id: ID!, $quantity: Int) {
        updateBongo(_id: $_id, quantity: $quantity) {
            _id
            name
            quantity
        }
    }
`;
