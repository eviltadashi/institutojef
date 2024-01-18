import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { uniqueEmailProfessor } from "../validacao/uniqueEmailProfessor.validator"

export class AtualizarProfessorDTO{

    @IsNotEmpty({ message:'Nome não pode ficar vazio'})
    @IsOptional()
    nome:string;

    @IsEmail(undefined, {message:'E-Mail inválido'})
    @IsOptional()
    @uniqueEmailProfessor({message:'o Email informado já existe'})
    email:string;

    @MinLength(6, {message:'Senha deve conter o minimo de 6 caracteres'})
    @IsOptional()
    senha:string;
    
    @IsOptional()
    is_active:boolean;
}