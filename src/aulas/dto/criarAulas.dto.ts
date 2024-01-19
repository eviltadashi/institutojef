import {IsBoolean, IsNotEmpty, IsOptional } from "class-validator";

export class CriarAulasDTO {

    @IsNotEmpty({ message:'É Obrigatorio informar o idCurso para relacionarmos com as aulas.'})
    idCurso: string;

    @IsNotEmpty({ message:'Nome não pode ficar em branco'})
    nome: string;
    
    @IsNotEmpty({ message:'Descrição não pode ficar em branco'})
    descricao: string;
  
    @IsOptional()
    @IsBoolean({message:'este campo só permite 0 ou 1 "true / false'})
    is_active: boolean;

}