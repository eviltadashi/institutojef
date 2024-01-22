import { Module } from '@nestjs/common';
import { alunosModule } from './alunos/alunos.module';
import { professoresModule } from './professores/professores.module';
import { cursosModule } from './cursos/cursos.module';
import { VinculoAlunoCursoModule } from './vinculoAlunoCurso/vinculoAlunoCurso.module';
import { AulasModule } from './aulas/aulas.module';
import { AuthModule } from './auth/auth.module';
import { AulasConteudoModule } from './aulasConteudo/aulasConteudo.module';
import { ProgressModule } from './progressCurso/progress.module';

@Module({
  imports: [
    alunosModule,
    professoresModule,
    cursosModule,
    VinculoAlunoCursoModule,
    AulasConteudoModule,
    ProgressModule,
    AulasModule,
    AuthModule,
  ],
})
export class AppModule {}
