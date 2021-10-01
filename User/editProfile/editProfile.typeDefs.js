import { gql } from "apollo-server-core";

export default gql`
  type EditProfileOutput {
    ok: String!
    error: String
  }
  type Mutation {
    editProfile(password: String, avatarURL: String): EditProfileOutput
  }
`;
