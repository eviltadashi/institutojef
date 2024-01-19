import { Controller, Post, Get, Delete, Body, UseGuards, Param, Put, NotFoundException, Headers} from "@nestjs/common";
import { alunosRepository } from "./alunos.repository";
import { CriarAlunoDTO } from "./dto/criaAlunoDTO";
import { AlunoEntity } from "./aluno.entity";
import { atualizaAlunoDTO } from "./dto/atualizaAlunoDTO";
import { alunos } from "prisma/src/generated/client";
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';
import { JwtDecripty } from '../decodeToken.service';
import { alunoInterface } from './aluno.Interface';

@Controller('/alunos')
export class alunosController{
    
    constructor(
        private alunosRepository: alunosRepository , 
        private jwtDecripty : JwtDecripty,
    ){}
       

    @Post()
    @UseGuards(AuthGuard())
    async createAluno( @Headers('Authorization') auth : string, @Body() dadosAluno: CriarAlunoDTO ){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            const alunoEntity = new AlunoEntity()
            alunoEntity.id = uuid();
            alunoEntity.nome = dadosAluno.nome;
            alunoEntity.email = dadosAluno.email;
            alunoEntity.is_active = dadosAluno.is_active;
            alunoEntity.senha = await bcrypt.hash(dadosAluno.senha,10);
            alunoEntity.userType = 'aluno';
            const result = await this.alunosRepository.create(alunoEntity);
            return {
                "id":result.id,
                "nome":result.nome,
                "email":result.email
            }
        }
        return {'msg':'Você não possuí privilégios para acessar essa rota'}
    }

    @Get()
    @UseGuards(AuthGuard())
    async listaAlunos(@Headers('Authorization') auth : string ){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            return await this.alunosRepository.listar();
        }
        return {'msg':'Você não possuí privilégios para acessar essa rota'}
    }
    
    @Get(':id')
    @UseGuards(AuthGuard())
    async listaAlunosId(@Param('id') id:string) : Promise<alunos | alunoInterface> {
        const retAluno = await this.alunosRepository.getAlunoId(id);
        if(!retAluno){
            throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
        }
        return {'msg':'Você não possuí privilégios para acessar essa rota'}
    }

    @Get('email/:email')
    @UseGuards(AuthGuard())
    async listaAlunoEmail( @Headers('Authorization') auth : string, @Param('email') email:string ) : Promise<alunos | alunoInterface> {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            return await this.alunosRepository.getAlunoEmail(email);
        }
        return {'msg':'Você não possuí privilégios para acessar essa rota'}
    }

    @Put('/:id')
    @UseGuards(AuthGuard())
    async atualizaAluno(@Param('id') id: string, @Body() dadosAlunoUpdate:atualizaAlunoDTO){
            const alunoEntity = new AlunoEntity()
            alunoEntity.nome = dadosAlunoUpdate.nome;
            alunoEntity.email = dadosAlunoUpdate.email;
            if(dadosAlunoUpdate.senha){alunoEntity.senha = await bcrypt.hash(dadosAlunoUpdate.senha,10)}
            const res = await this.alunosRepository.atualizar(id,alunoEntity)
            return {
                "id":res.id,
                "nome":res.nome,
                "email":res.email,
                "createdAt":res.createdAt,
                "updatedAt":res.updatedAt,
                "is_active":res.is_active
            }
    }

    @Delete('/:id')
    @UseGuards(AuthGuard())
    async removeAluno(@Param('id') id: string){
        //DELETE LOGICO
        const entity = new AlunoEntity()
        entity.is_active =false;
        const res = await this.alunosRepository.atualizar(id,entity)
        return {
            "id":res.id,
            "email":res.email,
            "is_active":res.is_active
        }
        // DELETE PERMANENTE
        // const response = await this.alunosRepository.remover(id);
        // return response;       
    }

}