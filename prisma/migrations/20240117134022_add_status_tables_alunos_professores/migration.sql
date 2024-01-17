/*
  Warnings:

  - Added the required column `status` to the `alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `professores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alunos` ADD COLUMN `status` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `professores` ADD COLUMN `status` BOOLEAN NOT NULL;
