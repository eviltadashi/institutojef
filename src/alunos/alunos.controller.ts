import { Controller, Post, Get, Delete, Body, UseGuards, Param, Put, NotFoundException} from "@nestjs/common";
import { alunosRepository } from "./alunos.repository";
import { CriarAlunoDTO } from "./dto/criaAlunoDTO";
import { AlunoEntity } from "./aluno.entity";
import { v4 as uuid } from 'uuid';
import { listaAlunoDTO } from "./dto/listaAlunoDTO";
import { atualizaAlunoDTO } from "./dto/atualizaAlunoDTO";
import { alunos } from "prisma/src/generated/client";

@Controller('/alunos')

export class alunosController{
    constructor(private alunosRepository: alunosRepository){}

    @Post()
    async createAluno(@Body() dadosAluno: CriarAlunoDTO){
        const alunoEntity = new AlunoEntity()
        alunoEntity.email = dadosAluno.email;
        alunoEntity.senha = dadosAluno.senha;
        alunoEntity.nome = dadosAluno.nome;
        alunoEntity.id = uuid();

        this.alunosRepository.create(alunoEntity)
        return {
            "success":true,
            "message":"Aluno criado com sucesso", 
            "alunos": new listaAlunoDTO(
                alunoEntity.email,
                alunoEntity.nome,
                alunoEntity.id
            )
        };
    }

    @Get()
    async listaAlunos(){
        const retAlunos = await this.alunosRepository.listar();
        return retAlunos;
    }
    
    @Get(':id')
    async listaAlunosId(@Param('id') id:string) : Promise<alunos | null>{
        const retAluno = await this.alunosRepository.getAlunoId(id);
        if(!retAluno){
            throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
        }
        return retAluno;
    }

    @Get('email/:email')
    async listaAlunoEmail(@Param('email') email:string): Promise<alunos | null>{
        const retAlunoEmail = await this.alunosRepository.getAlunoEmail(email);
        return retAlunoEmail;
    }

    @Put('/:id')
    async atualizaAluno(@Param('id') id: string, @Body() dadosAlunoUpdate:atualizaAlunoDTO){
        const retAtualizacaoAluno = await this.alunosRepository.atualizar(id, dadosAlunoUpdate);
        return retAtualizacaoAluno;       
    }

    @Delete('/:id')
    async removeAluno(@Param('id') id: string){
        const response = await this.alunosRepository.remover(id);
        return response;       
    }

}



