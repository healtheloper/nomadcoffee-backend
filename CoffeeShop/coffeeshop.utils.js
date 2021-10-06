import client from "../client";

export const isCoffeeShopExists = async (name) => {
  const ok = await client.coffeeShop.findFirst({
    where: {
      name,
    },
  });
  if (ok) {
    return {
      ok: false,
      error: "Already Exists Coffee shop name",
    };
  } else {
    return {
      ok: true,
    };
  }
};
