import client from "../../client";

export default {
  Query: {
    seeProfile: (_, { username }) =>
      client.user.findUnique({
        where: { username },
      }),
  },
  User: {
    followers: async ({ id }, { lastId }) => {
      try {
        const followers = await client.user
          .findUnique({ where: { id } })
          .followers({
            take: 5,
            skip: lastId ? 1 : 0,
            ...(lastId && { cursor: { id: lastId } }),
          });
        return followers;
      } catch (error) {
        return [];
      }
    },
    following: async ({ id }, { lastId }) => {
      try {
        const following = await client.user
          .findUnique({ where: { id } })
          .following({
            take: 5,
            skip: lastId ? 1 : 0,
            ...(lastId && { cursor: { id: lastId } }),
          });
        return following;
      } catch (error) {
        return [];
      }
    },
  },
};
