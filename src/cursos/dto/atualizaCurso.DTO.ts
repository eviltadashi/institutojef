import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";


export class atualizaCursoDTO{
  
    @IsNotEmpty({ message:'Nome não pode ficar em branco'})
    @IsOptional()
    nome: string

    @IsNotEmpty({ message:'Descrição não pode ficar em branco'})
    @IsOptional()
    descricao: string

    @IsOptional()
    banner: string

    @IsBoolean({message:'este campo só permite 0 ou 1 "true / false'})
    @IsOptional()    
    is_active: boolean



}