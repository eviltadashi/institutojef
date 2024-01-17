import { Module } from '@nestjs/common';
import { alunosController } from './alunos.controller';
import { alunosRepository } from './alunos.repository';
import { UniqueEmailValidator } from './validacao/uniqueEmail.validator';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [alunosController],
  providers:[alunosRepository, UniqueEmailValidator ]
})

export class alunosModule {}
