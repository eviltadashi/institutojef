export declare class ProgressRepository {
    updateVisualizacao(id: any, dados: any): Promise<{
        id: string;
        id_aluno: string;
        id_curso: string;
        id_aula: string;
        visualizado: boolean;
    }>;
}
