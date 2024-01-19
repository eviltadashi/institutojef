import { JwtDecripty } from "src/decodeToken.service";
import { VinculoAlunoCursoRepository } from "./vinculoAlunoCurso.repository";
import { criarVinculoAlunoCursoDTO } from "./dto/createVinculoAlunoCurso.dto";
import { atualizarVinculoAuloCursoDTO } from "./dto/updateVinculoAlunoCurso.dto";
export declare class VinculoAlunoCursoController {
    private jwtDecripty;
    private vinculoAlunoCursoRepository;
    constructor(jwtDecripty: JwtDecripty, vinculoAlunoCursoRepository: VinculoAlunoCursoRepository);
    criarVinculoAlunoCurso(data: criarVinculoAlunoCursoDTO): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            id_aluno: string;
            id_curso: string;
            status: import("../../prisma/src/generated/client").$Enums.StatusEnum;
        };
    }>;
    atualizarStatusCurso(auth: string, id: string, dados: atualizarVinculoAuloCursoDTO): Promise<{
        success: boolean;
        message: string;
        data: {
            success: boolean;
            message: string;
        };
        mensagem?: undefined;
    } | {
        mensagem: string;
        success?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    excluirVinculoAlunoCurso(auth: string, id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            success: boolean;
            message: string;
        };
        mensagem?: undefined;
    } | {
        mensagem: string;
        success?: undefined;
        message?: undefined;
        data?: undefined;
    }>;
    buscaCursosDoAluno(idAluno: string): Promise<{
        id: string;
        nome: string;
        email: string;
    }>;
    buscaAlunosDoCurso(auth: string, idCurso: string): Promise<{
        id: string;
        nome: string;
        descricao: string;
    } | {
        mensagem: string;
    }>;
}
