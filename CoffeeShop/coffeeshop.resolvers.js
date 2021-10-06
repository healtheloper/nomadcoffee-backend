import client from "../client";

export default {
  Category: {
    totalShops: async ({ id }) =>
      client.coffeeShop.count({
        where: {
          categories: {
            some: {
              id,
            },
          },
        },
      }),
  },
};
