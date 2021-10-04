import client from "../../client";
import { protectedResolver } from "../user.utils";

export default {
  Mutation: {
    unfollowUser: protectedResolver(async (_, { username }, { loggedUser }) => {
      try {
        const user = await client.user.findUnique({ where: { username } });
        if (!user) {
          return {
            ok: false,
            error: "User Not Found",
          };
        }
        await client.user.update({
          where: { id: loggedUser.id },
          data: { following: { disconnect: { username } } },
        });
        return {
          ok: true,
        };
      } catch (error) {
        return {
          ok: false,
          error,
        };
      }
    }),
  },
};
