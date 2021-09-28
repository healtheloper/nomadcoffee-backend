import client from "../client";

export default {
  Query: {
    getUsers: () => client.user.findMany(),
  },
  Mutation: {
    createUser: (_, { email }) =>
      client.user.create({
        data: { email },
      }),
  },
};
