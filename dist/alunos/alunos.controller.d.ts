import { alunosRepository } from "./alunos.repository";
import { CriarAlunoDTO } from "./dto/criaAlunoDTO";
import { atualizaAlunoDTO } from "./dto/atualizaAlunoDTO";
import { alunos } from "prisma/src/generated/client";
import { JwtDecripty } from '../decodeToken.service';
import { alunoInterface } from './aluno.Interface';
export declare class alunosController {
    private alunosRepository;
    private jwtDecripty;
    constructor(alunosRepository: alunosRepository, jwtDecripty: JwtDecripty);
    createAluno(auth: string, dadosAluno: CriarAlunoDTO): Promise<{
        id: string;
        nome: string;
        email: string;
        msg?: undefined;
    } | {
        msg: string;
        id?: undefined;
        nome?: undefined;
        email?: undefined;
    }>;
    listaAlunos(auth: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        is_active: boolean;
        userType: string;
        createdAt: Date;
        updatedAt: Date;
    }[] | {
        msg: string;
    }>;
    listaAlunosId(id: string): Promise<alunos | alunoInterface>;
    listaAlunoEmail(auth: string, email: string): Promise<alunos | alunoInterface>;
    atualizaAluno(id: string, dadosAlunoUpdate: atualizaAlunoDTO): Promise<{
        id: string;
        nome: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        is_active: boolean;
    }>;
    removeAluno(id: string): Promise<{
        id: string;
        email: string;
        is_active: boolean;
    }>;
}
