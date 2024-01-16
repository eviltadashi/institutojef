import { Module } from '@nestjs/common';
import { alunosModule } from './alunos/alunos.module';

@Module({
  imports: [alunosModule],
})
export class AppModule {}
