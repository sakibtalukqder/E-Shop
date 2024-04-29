/*
  Warnings:

  - The primary key for the `orderedproduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `idn` to the `OrderEdProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orderedproduct` DROP PRIMARY KEY,
    ADD COLUMN `idn` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`idn`);
