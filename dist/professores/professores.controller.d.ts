import { professoresRepository } from "./professores.repository";
import { CriarProfessorDTO } from "./dto/criarProfessorDTO";
import { AtualizarProfessorDTO } from "./dto/atualizarProfessorDTO";
export declare class professoresController {
    private professorRepository;
    jwtDecripty: any;
    constructor(professorRepository: professoresRepository);
    createNewProfessor(dados: CriarProfessorDTO): Promise<{
        id: string;
        nome: string;
        email: string;
    }>;
    getProfessores(auth: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        is_active: boolean;
        userType: string;
        createdAt: Date;
        updatedAt: Date;
    }[] | {
        mensagem: string;
    }>;
    getProfessoresById(auth: string, id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        is_active: boolean;
        userType: string;
        createdAt: Date;
        updatedAt: Date;
    } | {
        mensagem: string;
    }>;
    updateProfessor(auth: string, id: string, dados: AtualizarProfessorDTO): Promise<{
        id: string;
        nome: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        is_active: boolean;
        mensagem?: undefined;
    } | {
        mensagem: string;
        id?: undefined;
        nome?: undefined;
        email?: undefined;
        createdAt?: undefined;
        updatedAt?: undefined;
        is_active?: undefined;
    }>;
    deleteProfessor(auth: string, id: string): Promise<{
        id: string;
        email: string;
        is_active: boolean;
        mensagem?: undefined;
    } | {
        mensagem: string;
        id?: undefined;
        email?: undefined;
        is_active?: undefined;
    }>;
}
