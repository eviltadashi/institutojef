import { Optional } from "@nestjs/common";
import { IsBase64, IsNotEmpty, IsOptional } from "class-validator";

export class CriarCursosDTO {

    @IsNotEmpty({message:''})
    nome: string;

    @IsNotEmpty({message:''})
    descricao: string;

    @IsOptional()
    banner: string;
    
    @IsOptional()
    is_active: boolean;

}