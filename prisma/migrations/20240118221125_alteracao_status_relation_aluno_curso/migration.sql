/*
  Warnings:

  - The values [ADICIONADO,INICIADO,CONCLUIDO,CANCELADO] on the enum `relation_aluno_curso_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `alunos` MODIFY `userType` VARCHAR(191) NOT NULL DEFAULT 'aluno';

-- AlterTable
ALTER TABLE `professores` MODIFY `userType` VARCHAR(191) NOT NULL DEFAULT 'professor';

-- AlterTable
ALTER TABLE `relation_aluno_curso` MODIFY `status` ENUM('nao_iniciado', 'em_andamento', 'finalizado', 'aprovado') NOT NULL;
