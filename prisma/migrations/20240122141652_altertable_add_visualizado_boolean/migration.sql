/*
  Warnings:

  - You are about to drop the column `vizualizado` on the `progress_curso_aulas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `progress_curso_aulas` DROP COLUMN `vizualizado`,
    ADD COLUMN `visualizado` BOOLEAN NOT NULL DEFAULT false;
