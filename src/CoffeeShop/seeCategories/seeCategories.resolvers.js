import client from "../../client";

const CATEGORIES_PER_PAGE = 3;

export default {
  Query: {
    seeCategories: async (_, { page }) => {
      try {
        const categories = await client.category.findMany({
          take: CATEGORIES_PER_PAGE,
          skip: (page - 1) * CATEGORIES_PER_PAGE,
        });
        return {
          ok: true,
          categories,
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
