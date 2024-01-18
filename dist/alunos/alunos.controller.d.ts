import { alunosRepository } from "./alunos.repository";
import { CriarAlunoDTO } from "./dto/criaAlunoDTO";
import { atualizaAlunoDTO } from "./dto/atualizaAlunoDTO";
import { alunos } from "prisma/src/generated/client";
import { JwtDecripty } from '../decodeToken.service';
export declare class alunosController {
    private alunosRepository;
    private jwtDecripty;
    constructor(alunosRepository: alunosRepository, jwtDecripty: JwtDecripty);
    createAluno(dadosAluno: CriarAlunoDTO): Promise<{
        id: string;
        nome: string;
        email: string;
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
        mensagem: string;
    }>;
    listaAlunosId(id: string): Promise<alunos | null>;
    listaAlunoEmail(email: string): Promise<alunos | null>;
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
