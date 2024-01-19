import { IsBoolean, IsNotEmpty, IsNotIn, IsOptional} from "class-validator";

export class AtualizaAulasConteudoDTO{
    @IsNotEmpty({message:'Nome não pode ficar em branco'})
    @IsOptional()
    nome : string
}