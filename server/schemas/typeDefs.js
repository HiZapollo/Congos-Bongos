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
            categories: [Type] # Add a query to retrieve all categories
            Bongos(types: [ID], name: String): [Bongo] # Query to fetch Bongos based on type or name
            Bongo(_id: ID): Bongo # Query to get a single Bongo by ID
            order(_id: ID): Order # Query to retrieve a single Order by ID
        }
    
        type Mutation {
            login(email: String!, password: String!): Auth
            addUser(username: String!, email: String!, password: String!): Auth
            saveBongo(input: BongoInput!): User
            removeBongo(bongoId: ID!): User
            addOrder(Bongos: [ID]!): Order # Mutation to add an Order based on Bongo IDs
            updateUser(username: String, email: String): User # Mutation to update user details
            updateBongo(_id: ID!, quantity: Int): Bongo # Mutation to update Bongo quantity
        }
    `;

module.exports = typeDefs;