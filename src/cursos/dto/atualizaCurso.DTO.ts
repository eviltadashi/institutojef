import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";


export class atualizaCursoDTO{
  
    @IsOptional()
    nome: string

    @IsOptional()
    descricao: string

    @IsOptional()
    banner: string

    @IsBoolean({message:'este campo só permite 0 ou 1 "true / false'})
    @IsOptional()    
    is_active: boolean



}