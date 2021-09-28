import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: Int!
    email: String!
    phone: String
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    createUser(email: String): User
  }
`;
