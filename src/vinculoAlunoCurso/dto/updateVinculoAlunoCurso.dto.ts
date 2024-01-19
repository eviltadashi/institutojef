import { IsNotEmpty, IsIn } from "class-validator";

export class atualizarVinculoAuloCursoDTO {

    @IsNotEmpty({ message: 'Obrigatorio ter o status : [nao_iniciado, em_andamento, finalizado e aprovado]' })
    @IsIn(
        ["nao_iniciado", "em_andamento", "finalizado", "aprovado"], 
        { message: 'Status inválido, só é possivel utilizar [nao_iniciado, em_andamento, finalizado e aprovado]' }
    )
    status: string;

}
