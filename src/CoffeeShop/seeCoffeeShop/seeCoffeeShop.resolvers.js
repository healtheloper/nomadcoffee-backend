import client from "../../client";

export default {
  Query: {
    seeCoffeeShop: async (_, { id }) => {
      try {
        const coffeeShop = await client.coffeeShop.findFirst({
          where: {
            id,
          },
          include: {
            user: true,
          },
        });
        return {
          ok: true,
          coffeeShop,
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
