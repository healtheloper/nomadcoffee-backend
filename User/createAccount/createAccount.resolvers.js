import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, password, avatarURL, githubUsername }
    ) => {
      try {
        const existsUser = await client.user.findFirst({
          where: { OR: [{ username }, { email }] },
        });
        if (existsUser) {
          return {
            ok: false,
            error: "Already exists username OR email",
          };
        }
        const hashPassword = await bcrypt.hash(password, 10);
        await client.user.create({
          data: {
            username,
            email,
            name,
            location,
            avatarURL,
            githubUsername,
            password: hashPassword,
          },
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
    },
  },
};
