import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    login: async (_, { email, password }) => {
      try {
        const user = await client.user.findUnique({ where: { email } });
        if (!user) {
          return {
            ok: false,
            error: "User Not Found",
          };
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
          return {
            ok: false,
            error: "Wrong Password",
          };
        }

        const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        return {
          ok: true,
          token,
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
