/*
  Warnings:

  - A unique constraint covering the columns `[coffeeShopId]` on the table `CoffeeShopPhoto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CoffeeShopPhoto_coffeeShopId_key" ON "CoffeeShopPhoto"("coffeeShopId");
