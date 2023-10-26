const typeDefs = `
    type User {
        _id: ID 
        username: String
        email: String
        bongoCount: Int 
        savedbongos: [Bongo]
    }

    type Bongo {
        bongoId: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    input BongoInput {
        bongoId: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
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