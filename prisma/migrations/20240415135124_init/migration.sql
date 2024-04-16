/*
  Warnings:

  - You are about to drop the column `description` on the `seller` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `seller` table. All the data in the column will be lost.
  - You are about to drop the column `adressId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Seller` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobileNumber` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presentAddress` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Seller` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `seller` DROP FOREIGN KEY `Seller_userId_fkey`;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `sellerId` INTEGER NULL;

-- AlterTable
ALTER TABLE `seller` DROP COLUMN `description`,
    DROP COLUMN `userId`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `mobileNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `presentAddress` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` ENUM('USER', 'SELLER', 'ADMIN') NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `adressId`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Seller_email_key` ON `Seller`(`email`);

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_sellerId_fkey` FOREIGN KEY (`sellerId`) REFERENCES `Seller`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
