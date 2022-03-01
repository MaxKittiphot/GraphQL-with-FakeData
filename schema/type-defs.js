const {gql} = require("apollo-server");

// write graphQL
// extension linter: Apollo GraphQL
const typeDefs = gql`
    type Person {
        id: ID!
        name: String!
        age: Int!
        division: String!
        gender: Gender!
        friends: [Person!]
        favouriteBooks: [Book!]
    }

    type Book {
        id: ID!
        name: String!
    }

    type Query {
        persons: [Person!]!
        person(id: ID!): Person
        books: [Book!]!
        book(name: String!): Book
    }

    input CreateBookInput {
        name: String! 
    }

    input UpdateBookInput {
        id: ID!
        updatedBook: String!
    }

    type Mutation{
        createBook(input: CreateBookInput!): Book!
        updateBook(input: UpdateBookInput!): Book
        deleteBook(id: ID!): Book
    }
     
    enum Gender{
        MALE
        FEMALE
    }
`;

module.exports = {typeDefs};