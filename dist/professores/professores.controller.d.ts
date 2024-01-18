import { professoresRepository } from "./professores.repository";
import { CriarProfessorDTO } from "./dto/criarProfessorDTO";
import { AtualizarProfessorDTO } from "./dto/atualizarProfessorDTO";
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
        is_active: boolean;
        userType: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getProfessoresById(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        is_active: boolean;
        userType: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateProfessor(id: string, dados: AtualizarProfessorDTO): Promise<{
        id: string;
        nome: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        is_active: boolean;
    }>;
    deleteProfessor(id: string): Promise<{
        id: string;
        email: string;
        is_active: boolean;
    }>;
}
