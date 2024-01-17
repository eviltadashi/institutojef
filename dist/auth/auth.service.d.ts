import { JwtService } from '@nestjs/jwt';
import { alunosRepository } from '../alunos/alunos.repository';
export declare class AuthService {
    private readonly alunosRepository;
    private readonly jwtService;
    constructor(alunosRepository: alunosRepository, jwtService: JwtService);
    validatealuno(email: string, senha: string): Promise<any>;
    login(aluno: any): Promise<{
        access_token: string;
    }>;
}
