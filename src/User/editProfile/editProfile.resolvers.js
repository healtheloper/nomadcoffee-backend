import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../user.utils";

export default {
  Mutation: {
    editProfile: protectedResolver(
      async (_, { password: newPassword, avatarURL }, context) => {
        try {
          let hashPassword;
          if (newPassword) {
            hashPassword = await bcrypt.hash(newPassword, 10);
          }
          await client.user.update({
            where: { id: context.loggedUser.id },
            data: { avatarURL, password: hashPassword },
          });
          return {
            ok: true,
          };
        } catch (error) {
          return {
            ok: false,
            error: "Update Fail",
          };
        }
      }
    ),
  },
};
