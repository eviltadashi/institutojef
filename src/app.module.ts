import { Module } from '@nestjs/common';
import { alunosModule } from './alunos/alunos.module';
import { AuthModule } from './auth/auth.module';
import { professoresModule } from './professores/professores.module';
import { cursosModule } from './cursos/cursos.module';

@Module({
  imports: [
    alunosModule,
    professoresModule,
    cursosModule,
    AuthModule,
  ],
})
export class AppModule {}
