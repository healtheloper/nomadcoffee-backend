import client from "../../client";
import { protectedResolver } from "../../User/user.utils";
import { isCoffeeShopExists } from "../coffeeshop.utils";

export default {
  Mutation: {
    editCoffeeShop: protectedResolver(
      async (_, { id, name, latitude, longitude }, { loggedUser }) => {
        try {
          const coffeeShop = await client.coffeeShop.findFirst({
            where: {
              id,
              userId: loggedUser.id,
            },
          });
          if (!coffeeShop) {
            return {
              ok: false,
              error: "Didn't found this CoffeeShop",
            };
          }
          const { ok, error } = await isCoffeeShopExists(name);
          if (!ok) {
            return {
              ok,
              error,
            };
          }
          await client.coffeeShop.update({
            where: {
              id,
            },
            data: {
              name,
              latitude,
              longitude,
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
      }
    ),
  },
};
