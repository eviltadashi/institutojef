import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { uniqueEmail } from "../validacao/uniqueEmail.validator";

export class CriarAlunoDTO{
    
    @IsNotEmpty({ message:'Nome não pode ficar em branco'})
    nome: string;

    @IsEmail(undefined,{ message: 'email invalido, verifique o campo.'})
    @uniqueEmail({message:'E-mail já cadastrado'})
    email: string;

    @MinLength(6, {message:'Senha deve ter ao menos 6 caracteres'})
    senha: string;

    is_active: boolean;
}