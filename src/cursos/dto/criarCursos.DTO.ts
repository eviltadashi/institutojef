import { IsBase64, IsNotEmpty, IsOptional } from "class-validator";

export class CriarCursosDTO {

    @IsNotEmpty({ message:'Nome não pode ficar em branco'})
    nome: string;

    @IsNotEmpty({ message:'Descrição não pode ficar em branco'})
    descricao: string;

    @IsOptional()
    banner: string;
    
    @IsOptional()
    is_active: boolean;

}