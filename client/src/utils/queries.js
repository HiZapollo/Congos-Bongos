import { gql } from '@apollo/client';

export const GET_TYPES = gql`
    query GetTypes {
        types {
            _id
            name
        }
    }
`;

export const GET_BONGOS_BY_TYPE_OR_NAME = gql`
    query GetBongos($types: [ID], $name: String) {
        bongos(types: $types, name: $name) {
            _id
            name
            description
            image
            quantity
            price
            types {
                _id
                name
            }
        }
    }
`;

export const GET_SINGLE_BONGO = gql`
    query GetSingleBongo($id: ID!) {
        bongo(_id: $id) {
            _id
            name
            description
            image
            quantity
            price
            types {
                _id
                name
            }
        }
    }
`;

export const GET_SINGLE_ORDER = gql`
    query GetSingleOrder($id: ID!) {
        order(_id: $id) {
            _id
            purchaseDate
            Bongos {
                _id
                name
                description
            }
        }
    }
`;

export const GET_SINGLE_USER = gql`
    query GetSingleUser($id: ID!) {
        user(_id: $id) {
            _id
            username
            email
        }
    }
`;

export const INIT_CHECKOUT = gql`
    query InitCheckout($bongos: [BongoInput]) {
        checkout(bongos: $bongos) {
            session
        }
    }
`;
