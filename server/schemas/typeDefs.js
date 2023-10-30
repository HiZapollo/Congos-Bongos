const typeDefs = `
        type Type {
            _id: ID
            name: String!
        }

        type User {
            _id: ID
            username: String!
            email: String!
            password: String!
            savedBongos: [Order]
            bongoCount: Int
        }

        type Bongo {
            _id: ID
            name: String!
            description: String!
            image: String
            quantity: Int
            price: Float
            types: [Type]
        }

        type Order {
            _id: ID
            purchaseDate: String
            Bongos: [Bongo]
        }

        input UserInput {
            username: String!
            email: String!
            password: String!
            savedBongos: [OrderInput]
            # Define other required fields for input if needed
        }

        input BongoInput {
            name: String!
            description: String!
            image: String
            quantity: Int
            price: Float
            types: [ID] # Assuming this is a list of Type IDs
        }

        input OrderInput {
            purchaseDate: String
            Bongos: [ID] # Assuming this is a list of Bongo IDs
        }

        type Auth {
            token: ID!
            user: User
        }

        type Query {
            me: User
        }

        type Mutation {
            login(email: String!, password: String!): Auth
            addUser(username: String!, email: String!, password: String!): Auth
            saveBongo(input: BongoInput!): User
            removeBongo(bongoId: String!): User
        }
`;

module.exports = typeDefs;