import { JwtService } from '@nestjs/jwt';
import { alunosRepository } from '../alunos/alunos.repository';
import { professoresRepository } from '../professores/professores.repository';
export declare class AuthService {
    private readonly alunosRepository;
    private readonly professoresRepository;
    private readonly jwtService;
    constructor(alunosRepository: alunosRepository, professoresRepository: professoresRepository, jwtService: JwtService);
    validatealuno(email: string, senha: string): Promise<any>;
    validateProfessor(email: string, senha: string): Promise<any>;
    login(usuario: any): Promise<{
        access_token: string;
    }>;
}
