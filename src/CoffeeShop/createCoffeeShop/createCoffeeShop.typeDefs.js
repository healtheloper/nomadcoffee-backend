import { gql } from "apollo-server-core";

export default gql`
  type CreateCoffeeShopResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createCoffeeShop(
      name: String
      latitude: String
      longitude: String
      url: String
      category: String
      slug: String
    ): CreateCoffeeShopResult
  }
`;
