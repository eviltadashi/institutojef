import { IsBase64, IsNotEmpty, IsString } from "class-validator";

export class CriaAulasConteudoDTO {

    @IsNotEmpty({ message: 'O ID do curso deve ser preenchido' })
    @IsString({ message: 'O ID do curso deve ser uma string' })
    id_aula: string;

    @IsNotEmpty({ message: 'O nome do conteúdo deve ser preenchido informando se é um anexo ou um link' })
    @IsString({ message: 'O nome do conteúdo deve ser uma string' })
    nome: string;

    @IsNotEmpty({ message: 'O conteúdo deve ser enviado como base64' })
    conteudo: string;

}

