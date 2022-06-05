// THIS IS COPIED NEEDS EDITING
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
    # There is now a field to store the user's password
  }

  type: Book {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String!
    link: String!
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: Array!, description: String!, title: String!, bookId: String!, image: String!, link: String!): User
    removeBook(bookId: String!): User
    # addUser(profileId: ID!, skill: String!): Profile
    # removeProfile(profileId: ID!): Profile
    # removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
