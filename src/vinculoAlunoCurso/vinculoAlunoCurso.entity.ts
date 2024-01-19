export class VinculoAlunoCursoEntity {
    id: string;
    idCurso: string;
    idAluno: string;
    status: string;
}
// Status só pode receber: 
// nao_iniciado
// em_andamento
// finalizado
// aprovado