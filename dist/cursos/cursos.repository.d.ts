import { CursosEntity } from "./cursos.entity";
export declare class CursosRepository {
    create(curso: CursosEntity): Promise<{
        id: string;
        nome: string;
        descricao: string;
        banner: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    get(): Promise<{
        id: string;
        nome: string;
        descricao: string;
        banner: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        nome: string;
        descricao: string;
        banner: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: Partial<CursosEntity>): Promise<{
        id: string;
        nome: string;
        descricao: string;
        banner: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
