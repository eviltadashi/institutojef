/*
  Warnings:

  - You are about to drop the column `visualizado` on the `aulas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `aulas` DROP COLUMN `visualizado`;

-- CreateTable
CREATE TABLE `progress_curso_aulas` (
    `id` VARCHAR(191) NOT NULL,
    `id_aluno` VARCHAR(191) NOT NULL,
    `id_curso` VARCHAR(191) NOT NULL,
    `id_aula` VARCHAR(191) NOT NULL,
    `vizualizado` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `progress_curso_aulas_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
