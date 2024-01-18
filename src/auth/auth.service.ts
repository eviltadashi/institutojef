import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { alunosRepository } from '../alunos/alunos.repository';
import { professoresRepository } from '../professores/professores.repository';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly alunosRepository: alunosRepository,
    private readonly professoresRepository: professoresRepository,
    private readonly jwtService: JwtService,
  ) {}

  async validatealuno(email: string, senha: string): Promise<any> {
    const aluno = await this.alunosRepository.getAlunoEmail(email);
    
    if (aluno && (await bcrypt.compare(senha, aluno.senha))) {
      const { senha, ...result } = aluno;
      return result;
    }
    return null;
  }

  async validateProfessor(email: string, senha: string): Promise<any> {
    const professor = await this.professoresRepository.listarProfessorPorEmail(email)
    
    if (professor && (await bcrypt.compare(senha, professor.senha))) {
      const { senha, ...result } = professor;
      return result;
    }
    return null;
  }



  async login(usuario: any) {
    const payload = { sub: usuario.id, email: usuario.email, userType: usuario.userType };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
