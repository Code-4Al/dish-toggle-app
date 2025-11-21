/*
  Warnings:

  - The primary key for the `Dish` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Dish` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Dish` table. All the data in the column will be lost.
  - You are about to drop the column `isAvailable` on the `Dish` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Dish` table. All the data in the column will be lost.
  - Added the required column `dishName` to the `Dish` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Dish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dish" DROP CONSTRAINT "Dish_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "isAvailable",
DROP COLUMN "name",
ADD COLUMN     "dishId" SERIAL NOT NULL,
ADD COLUMN     "dishName" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false,
ADD CONSTRAINT "Dish_pkey" PRIMARY KEY ("dishId");
