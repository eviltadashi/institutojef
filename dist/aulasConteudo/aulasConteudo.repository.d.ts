/// <reference types="node" />
import { AulaConteudoEntity } from "./aulasConteudo.entity";
export declare class AulasCounteudoRepository {
    createConteudo(dados: AulaConteudoEntity): Promise<{
        id: string;
        id_aula: string;
        nome: string;
        conteudo: Buffer;
    }>;
    updateConteudo(id: string, dados: AulaConteudoEntity): Promise<void>;
    deleteConteudo(id: string): Promise<{
        success: boolean;
        message: string;
        id: string;
        id_aula: string;
        nome: string;
    }>;
    getConteudoByIdAula(id_aula: string): Promise<void>;
    getConteudoById(id: string): Promise<void>;
}
