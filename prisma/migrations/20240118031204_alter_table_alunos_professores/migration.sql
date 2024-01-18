/*
  Warnings:

  - You are about to drop the column `status` on the `alunos` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `professores` table. All the data in the column will be lost.
  - Added the required column `userType` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userType` to the `professores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alunos` DROP COLUMN `status`,
    ADD COLUMN `is_active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `userType` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `professores` DROP COLUMN `status`,
    ADD COLUMN `is_active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `userType` VARCHAR(191) NOT NULL;
