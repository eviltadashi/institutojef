import { Module } from '@nestjs/common';
import { alunosModule } from './alunos/alunos.module';
import { AuthModule } from './auth/auth.module';
import { professoresModule } from './professores/professores.module';

@Module({
  imports: [
    alunosModule,
    professoresModule,
    AuthModule,
  ],
})
export class AppModule {}
