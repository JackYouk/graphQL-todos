const {gql} = require('apollo-server-express');

// no CRUD in gql --> only Queries and Mutations
// Queries: GET requests
// Mutations: POST/PUT/DELETE

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }

    type Todo {
        _id: ID
        todo: String
        completed: Boolean
        userId: String
    }

    type Query {
        users: [User]
        user(id: String!): User
        todos: [Todo]
        todo(id: String): Todo
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User

    }
`;

module.exports = typeDefs;