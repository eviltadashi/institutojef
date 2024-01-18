import { CursosRepository } from "./cursos.repository";
import { CriarCursosDTO } from "./dto/criarCursos.DTO";
import { JwtDecripty } from "src/decodeToken.service";
import { atualizaCursoDTO } from "./dto/atualizaCurso.DTO";
export declare class CursosController {
    private cursosRepository;
    private jwtDecripty;
    constructor(cursosRepository: CursosRepository, jwtDecripty: JwtDecripty);
    criarCursos(auth: string, dados: CriarCursosDTO): Promise<{
        id: string;
        nome: string;
        descricao: string;
        banner: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | {
        mensagem: string;
    }>;
    listarCursos(): Promise<{
        id: string;
        nome: string;
        descricao: string;
        banner: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    listarCursoPorId(id: string): Promise<{
        id: string;
        nome: string;
        descricao: string;
        banner: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    atualizarCursos(auth: string, id: string, dados: atualizaCursoDTO): Promise<{
        id: string;
        nome: string;
        descricao: string;
        banner: string;
        is_active: boolean;
        createdAt: Date;
        updatedAt: Date;
    } | {
        message: string;
    }>;
    removerCursos(auth: string, id: string, dados: atualizaCursoDTO): Promise<{
        message: string;
    }>;
}
