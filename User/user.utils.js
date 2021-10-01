import jwt from "jsonwebtoken";
import client from "../client";

export const getUser = async (token) => {
  try {
    const { id } = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await client.user.findUnique({ where: { id } });
    return user ? user : null;
  } catch (error) {
    return null;
  }
};

export const protectedResolver =
  (ourResolver) => (root, args, context, info) => {
    if (!context.loggedUser) {
      return {
        ok: false,
        error: "Please Login",
      };
    }
    return ourResolver(root, args, context, info);
  };
