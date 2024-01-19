import { IsNotEmpty, IsIn } from "class-validator";

export class criarVinculoAlunoCursoDTO {

    @IsNotEmpty({ message: 'Campo IdAluno é Obrigatório' })
    idAluno: string;

    @IsNotEmpty({ message: 'Campo idCurso é Obrigatório' })
    idCurso: string;

    // @IsIn(["nao_iniciado", "em_andamento", "finalizado", "aprovado"], { message: 'Status inválido, só é possivel utilizar [nao_iniciado, em_andamento, finalizado e aprovado]' })
    // status: string;

}
