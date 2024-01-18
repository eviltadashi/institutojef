import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { alunosRepository } from '../alunos/alunos.repository';
import { professoresRepository } from 'src/professores/professores.repository';
import { CursosRepository } from 'src/cursos/cursos.repository';


const segredo = process.env.PASSPORTJWT;

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: segredo,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, alunosRepository, professoresRepository, CursosRepository],
  exports: [PassportModule, JwtModule],
})

export class AuthModule {}
