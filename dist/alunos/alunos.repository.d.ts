import { AlunoEntity } from "./aluno.entity";
export declare class alunosRepository {
    create(aluno: AlunoEntity): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    listar(): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getAlunoId(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAlunoEmail(email: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    atualizar(id: string, dadosAlunoUpdate: Partial<AlunoEntity>): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remover(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    existeComEmail(email: string): Promise<boolean>;
}
