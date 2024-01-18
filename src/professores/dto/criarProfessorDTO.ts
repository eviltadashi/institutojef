import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { uniqueEmailProfessor } from "../validacao/uniqueEmailProfessor.validator"

export class CriarProfessorDTO{

    @IsNotEmpty({ message:'Nome não pode ficar vazio'})
    nome:string;

    @IsEmail(undefined, {message:'E-Mail inválido'})
    @uniqueEmailProfessor({message:'o Email informado já existe'})
    email:string;

    @MinLength(6, {message:'Senha deve conter o minimo de 6 caracteres'})
    senha:string;
    
    is_active:boolean;
}