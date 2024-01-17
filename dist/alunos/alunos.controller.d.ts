import { alunosRepository } from "./alunos.repository";
import { CriarAlunoDTO } from "./dto/criaAlunoDTO";
import { listaAlunoDTO } from "./dto/listaAlunoDTO";
import { atualizaAlunoDTO } from "./dto/atualizaAlunoDTO";
import { alunos } from "prisma/src/generated/client";
export declare class alunosController {
    private alunosRepository;
    constructor(alunosRepository: alunosRepository);
    createAluno(dadosAluno: CriarAlunoDTO): Promise<{
        id: string;
        nome: string;
        email: string;
    }>;
    listaAlunos(): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    listaAlunosId(id: string): Promise<alunos | null>;
    listaAlunoEmail(email: string): Promise<alunos | null>;
    atualizaAluno(id: string, dadosAlunoUpdate: atualizaAlunoDTO): Promise<{
        success: boolean;
        message: string;
        aluno: listaAlunoDTO;
    }>;
    removeAluno(id: string): Promise<{
        id: string;
        nome: string;
        email: string;
        senha: string;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
