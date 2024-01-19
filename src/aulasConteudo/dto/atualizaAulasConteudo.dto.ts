import { IsBoolean, IsNotEmpty, IsNotIn, IsOptional} from "class-validator";

export class AtualizaAulasConteudoDTO{
    @IsNotEmpty({message:'Nome não pode ficar em branco'})
    @IsOptional()
    nome : string

    @IsOptional()
    @IsNotEmpty({ message: 'O conteúdo deve ser enviado como base64' })
    conteudo: string;
}