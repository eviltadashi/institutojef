export declare class VinculoAlunoCursoRepository {
    createVinculo(idAluno: string, idCurso: string): Promise<{
        id: string;
        id_aluno: string;
        id_curso: string;
        status: import("prisma/src/generated/client").$Enums.StatusEnum;
    }>;
    updateVinculo(id: string, novoStatus: string): Promise<{
        success: boolean;
        message: string;
    }>;
    deleteVinculo(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
    getVinculoIdAluno(idAluno: string): Promise<{
        id: string;
        nome: string;
        email: string;
    }>;
    getVinculoIdCurso(idCurso: string): Promise<{
        id: string;
        nome: string;
        descricao: string;
    }>;
}
