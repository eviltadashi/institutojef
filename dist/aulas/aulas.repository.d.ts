import { AulasEntity } from "./aulas.entity";
export declare class AulasRepository {
    create(aula: AulasEntity, idCurso: any): Promise<{
        id: string;
        nome: string;
        descricao: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(dados: AulasEntity, id: string): Promise<{
        id: string;
        nome: string;
        descricao: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    list(): Promise<{
        id: string;
        nome: string;
        descricao: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    listById(id: string): Promise<{
        id: string;
        nome: string;
        descricao: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        id: string;
        nome: string;
        descricao: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
