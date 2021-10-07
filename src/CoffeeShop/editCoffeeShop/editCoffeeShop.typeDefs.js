import { gql } from "apollo-server-core";

export default gql`
  type EditCoffeeShopResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editCoffeeShop(
      id: Int
      name: String
      latitude: String
      longitude: String
      url: String
      category: String
      slug: String
    ): EditCoffeeShopResult
  }
`;
