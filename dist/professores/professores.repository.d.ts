import { ProfessoresEntity } from "./professores.entity";
export declare class professoresRepository {
    private professores;
    listarProfessores(): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        is_active: boolean;
        userType: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    listarProfessorPorID(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        is_active: boolean;
        userType: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    listarProfessorPorEmail(email: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        is_active: boolean;
        userType: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    criarProfessor(dados: ProfessoresEntity): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        is_active: boolean;
        userType: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    atualizaProfessor(id: string, dados: ProfessoresEntity): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        is_active: boolean;
        userType: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    emailVerify(email: string): Promise<boolean>;
}
