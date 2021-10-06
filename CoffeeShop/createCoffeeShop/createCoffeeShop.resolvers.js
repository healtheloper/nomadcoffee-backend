import client from "../../client";
import { protectedResolver } from "../../User/user.utils";
import { isCoffeeShopExists } from "../coffeeshop.utils";

export default {
  Mutation: {
    createCoffeeShop: protectedResolver(
      async (
        _,
        { name, latitude, longitude, url, category, slug },
        { loggedUser }
      ) => {
        try {
          const { ok, error } = await isCoffeeShopExists(name);
          if (!ok) {
            return {
              ok,
              error,
            };
          }
          const coffeeShop = await client.coffeeShop.create({
            data: {
              name,
              latitude,
              longitude,
              user: {
                connect: {
                  id: loggedUser.id,
                },
              },
              categories: {
                connectOrCreate: [
                  {
                    where: {
                      name: category,
                    },
                    create: {
                      name: category,
                      slug,
                    },
                  },
                ],
              },
            },
          });
          const coffeeShopPhoto = await client.coffeeShopPhoto.create({
            data: {
              url,
              shop: {
                connect: {
                  id: coffeeShop.id,
                },
              },
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
