import client from "../client";

export default {
  User: {
    totalFollowing: ({ id }) =>
      client.user.count({ where: { followers: { some: { id } } } }),
    totalFollowers: ({ id }) =>
      client.user.count({ where: { following: { some: { id } } } }),
    isFollowing: async ({ id }, _, { loggedUser }) => {
      if (!loggedUser) return false;
      const isExist = await client.user.count({
        where: { id: loggedUser.id, following: { some: { id } } },
      });
      return Boolean(isExist);
    },
    isMe: (root, _, { loggedUser }) => {
      if (!loggedUser) return false;
      return root.id === loggedUser.id;
    },
  },
};
