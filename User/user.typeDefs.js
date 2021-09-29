import { gql } from "apollo-server-core";

export default gql`
  type CommonOutput {
    ok: Boolean!
    error: String
  }
  type User {
    id: Int!
    username: String!
    email: String!
    name: String!
    location: String
    avatarURL: String!
    githubUsername: String
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    createAccount(
      username: String
      email: String
      name: String
      location: String
      password: String
      avatarURL: String
      githubUsername: String
    ): CommonOutput
  }
`;
