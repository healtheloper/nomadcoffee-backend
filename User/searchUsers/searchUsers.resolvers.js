import client from "../../client";

export default {
  Mutation: {
    searchUsers: async (_, { keyword, lastId }) => {
      const users = await client.user.findMany({
        where: { username: { startsWith: keyword.toLowerCase() } },
        take: 3,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
      });
      return users;
    },
  },
};
