import { Controller, Post, Get, Delete, Body, UseGuards, Param, Put, NotFoundException} from "@nestjs/common";
import { alunosRepository } from "./alunos.repository";
import { CriarAlunoDTO } from "./dto/criaAlunoDTO";
import { AlunoEntity } from "./aluno.entity";
import { v4 as uuid } from 'uuid';
import { listaAlunoDTO } from "./dto/listaAlunoDTO";
import { atualizaAlunoDTO } from "./dto/atualizaAlunoDTO";
import { alunos } from "prisma/src/generated/client";
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';


@Controller('/alunos')

export class alunosController{
    constructor(private alunosRepository: alunosRepository){}

    @Post()
    async createAluno(@Body() dadosAluno: CriarAlunoDTO){
        const alunoEntity = new AlunoEntity()
        alunoEntity.id = uuid();
        alunoEntity.nome = dadosAluno.nome;
        alunoEntity.email = dadosAluno.email;
        alunoEntity.senha = await bcrypt.hash(dadosAluno.senha,10);

        this.alunosRepository.create(alunoEntity)
        return {
            "success":true,
            "message":"Aluno criado com sucesso", 
            "alunos": new listaAlunoDTO(
                alunoEntity.id,
                alunoEntity.nome,
                alunoEntity.email,
            )
        };
    }

    @Get()
    @UseGuards(AuthGuard())
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
    
        const alunoEntity = new AlunoEntity()
        alunoEntity.id = uuid();
        alunoEntity.nome = dadosAlunoUpdate.nome;
        alunoEntity.email = dadosAlunoUpdate.email;
        alunoEntity.senha = await bcrypt.hash(dadosAlunoUpdate.senha,10);

        this.alunosRepository.atualizar(id,alunoEntity)
        return {
            "success":true,
            "message":"Alterações Realizadas com Sucesso", 
            "aluno": new listaAlunoDTO(
                alunoEntity.id,
                alunoEntity.nome,
                alunoEntity.email,
            )
        };
    }

    @Delete('/:id')
    async removeAluno(@Param('id') id: string){
        const response = await this.alunosRepository.remover(id);
        return response;       
    }

}



