import { professoresRepository } from "./professores.repository";
import { CriarProfessorDTO } from "./dto/criarProfessorDTO";
export declare class professoresController {
    private professorRepository;
    constructor(professorRepository: professoresRepository);
    createNewProfessor(dados: CriarProfessorDTO): Promise<{
        id: string;
        nome: string;
        email: string;
    }>;
    getProfessores(): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getProfessoresById(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
