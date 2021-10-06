import client from "../../client";

const SHOPS_PER_PAGE = 3;

export default {
  Query: {
    seeCategory: async (_, { name, page }) => {
      try {
        const coffeeShops = await client.category
          .findUnique({
            where: {
              name,
            },
          })
          .shops({
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
