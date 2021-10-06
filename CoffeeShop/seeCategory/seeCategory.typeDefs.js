import { gql } from "apollo-server-core";

export default gql`
  type SeeCategoryResult {
    ok: Boolean!
    error: String
    coffeeShops: [CoffeeShop]
  }
  type Query {
    seeCategory(name: String!, page: Int!): SeeCategoryResult!
  }
`;
