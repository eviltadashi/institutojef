import { Module } from '@nestjs/common';
import { alunosController } from './alunos.controller';
import { alunosRepository } from './alunos.repository';
import { UniqueEmailValidator } from './validacao/uniqueEmail.validator';

@Module({
  controllers: [alunosController],
  providers:[alunosRepository, UniqueEmailValidator ]
})

export class alunosModule {}
