/*
  Warnings:

  - You are about to drop the column `id_curso` on the `aulas_conteudo` table. All the data in the column will be lost.
  - Added the required column `id_aula` to the `aulas_conteudo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `aulas_conteudo` DROP COLUMN `id_curso`,
    ADD COLUMN `id_aula` VARCHAR(191) NOT NULL;
