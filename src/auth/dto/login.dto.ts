import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { uniqueEmail } from 'src/alunos/validacao/uniqueEmail.validator';

export class LoginDto {
  @IsEmail(undefined,{ message: 'email invalido, verifique o campo.'})
  @IsOptional()
  email: string;

  @IsNotEmpty()
  senha: string;
}
