import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtDecripty } from 'src/decodeToken.service';
import { UniqueEmailValidator } from './validacao/uniqueEmail.validator';
import { alunosController } from './alunos.controller';
import { alunosRepository } from './alunos.repository';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule],
  controllers: [alunosController],
  providers:[alunosRepository, UniqueEmailValidator, JwtDecripty]
})

export class alunosModule {}
