import { AulasRepository } from "./aulas.repository";
import { JwtDecripty } from "src/decodeToken.service";
import { CriarAulasDTO } from "./dto/criarAulas.dto";
import { atualizaAulaDTO } from "./dto/atualizarAula.dto";
export declare class AulasController {
    private aulas;
    private jwtDecripty;
    constructor(aulas: AulasRepository, jwtDecripty: JwtDecripty);
    criarAula(auth: string, dados: CriarAulasDTO): Promise<{
        id: string;
        nome: string;
        descricao: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | {
        mensagem: string;
    }>;
    listarAulas(): Promise<{
        id: string;
        nome: string;
        descricao: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    listarAulasPorId(id: string): Promise<{
        id: string;
        nome: string;
        descricao: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    atualizarAulas(auth: string, id: string, dados: atualizaAulaDTO): Promise<{
        id: string;
        nome: string;
        descricao: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | {
        mensagem: string;
    }>;
    removerAula(auth: string, id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            nome: string;
            descricao: string;
            is_active: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        mensagem?: undefined;
    } | {
        mensagem: string;
        success?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
}
