import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { alunosRepository } from '../alunos/alunos.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly alunosRepository: alunosRepository,
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

  async login(aluno: any) {
    const payload = { sub: aluno.id, email: aluno.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
