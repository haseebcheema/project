const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Todo {
    id: ID
    title: String
    userId: ID
  }

  type Query {
    getTodos: [Todo]
  }

  type Mutation {
    addTodo(title: String!): Todo
    deleteTodo(id: ID!): String
  }
`;

module.exports = typeDefs;
