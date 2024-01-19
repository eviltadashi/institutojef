/// <reference types="node" />
import { AulasCounteudoRepository } from "./aulasConteudo.repository";
import { CriaAulasConteudoDTO } from "./dto/criaAulasConteudo.dto";
import { JwtDecripty } from "src/decodeToken.service";
export declare class AulasCounteudoController {
    private jwtDecripty;
    private AulasConteudoRepository;
    constructor(jwtDecripty: JwtDecripty, AulasConteudoRepository: AulasCounteudoRepository);
    criarConteudo(auth: string, dados: CriaAulasConteudoDTO): Promise<{
        id: string;
        id_aula: string;
        nome: string;
        conteudo: Buffer;
    } | {
        mensagem: string;
    }>;
    listarConteudo(auth: string): Promise<{
        mensagem: string;
    }>;
    atualizarConteudo(auth: string): Promise<{
        mensagem: string;
    }>;
    removerConteudo(auth: string, id: string): Promise<{
        success: boolean;
        message: string;
        id: string;
        id_aula: string;
        nome: string;
    } | {
        mensagem: string;
    }>;
}
