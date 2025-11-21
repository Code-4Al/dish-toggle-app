/*
  Warnings:

  - The primary key for the `Dish` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "dishId" DROP DEFAULT,
ALTER COLUMN "dishId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Dish_pkey" PRIMARY KEY ("dishId");
DROP SEQUENCE "Dish_dishId_seq";
