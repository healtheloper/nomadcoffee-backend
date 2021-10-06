import { gql } from "apollo-server-core";

export default gql`
  type SeeCoffeeShopResult {
    ok: Boolean!
    error: String
    coffeeShop: CoffeeShop
  }
  type Query {
    seeCoffeeShop(id: Int): SeeCoffeeShopResult
  }
`;
