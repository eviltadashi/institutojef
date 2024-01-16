import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { uniqueEmail } from "../validacao/uniqueEmail.validator";

export class atualizaAlunoDTO{
    
    @IsNotEmpty({ message:'Nome não pode ficar em branco'})
    @IsOptional()
    nome: string;

    @IsEmail(undefined,{ message: 'email invalido, verifique o campo.'})
    @IsOptional()
    @uniqueEmail({message:'E-mail já cadastrado'})
    email: string;

    @MinLength(6, {message:'Senha deve ter ao menos 6 caracteres'})
    @IsOptional()
    senha: string; 
}