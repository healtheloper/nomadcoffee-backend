import client from "../../client";

const SHOPS_PER_PAGE = 5;

export default {
  Query: {
    seeCoffeeShops: async (_, { page }) => {
      try {
        const coffeeShops = await client.coffeeShop.findMany({
          take: SHOPS_PER_PAGE,
          skip: (page - 1) * SHOPS_PER_PAGE,
        });
        return {
          ok: true,
          coffeeShops,
        };
      } catch (error) {
        return {
          ok: false,
          error,
        };
      }
    },
  },
};
