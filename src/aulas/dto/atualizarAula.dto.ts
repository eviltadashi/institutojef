import { IsBoolean, IsNotEmpty, IsOptional} from "class-validator";

export class atualizaAulaDTO{
      
    @IsOptional()
    @IsNotEmpty({ message:'Nome não pode ficar em branco'})
    nome: string

    @IsOptional()
    @IsNotEmpty({ message:'Descrição não pode ficar em branco'})
    descricao: string

    @IsBoolean({message:'este campo só permite 0 ou 1 "true / false'})
    @IsOptional()    
    is_active: boolean

}