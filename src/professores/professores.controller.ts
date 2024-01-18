import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { professoresRepository } from "./professores.repository";
import { CriarProfessorDTO } from "./dto/criarProfessorDTO";
import { ProfessoresEntity } from "./professores.entity";
import { v4 as uuid } from 'uuid';
import { AtualizarProfessorDTO } from "./dto/atualizarProfessorDTO";
import * as bcrypt from 'bcrypt';
import { Prisma } from "prisma/src/generated/client";
import { listaProfessoresDTO } from "./dto/listaProfessoresDTO";

@Controller('/professores')

export class professoresController{
    constructor(private professorRepository: professoresRepository){}

    @Post()
    async createNewProfessor(@Body() dados: CriarProfessorDTO){
        const entity = new ProfessoresEntity()
        entity.id = uuid();
        entity.nome = dados.nome;
        entity.email = dados.email;
        entity.is_active = dados.is_active;
        entity.senha = await bcrypt.hash(dados.senha,10);
        entity.userType = 'professor';
        const result = await this.professorRepository.criarProfessor(entity);
        return {
            "id":result.id,
            "nome":result.nome,
            "email":result.email
        }
        
      
    }

    @Get()
    async getProfessores(){
       const ret = await this.professorRepository.listarProfessores();
       return ret;
    }

    @Get(':id')
    async getProfessoresById(@Param('id') id:string){
        const ret = await this.professorRepository.listarProfessorPorID(id);
        return ret;
    }
    
   
    @Put(':id')
    async updateProfessor(@Param('id') id:string , @Body() dados:AtualizarProfessorDTO){
        const entity = new ProfessoresEntity()
        entity.nome = dados.nome;
        entity.email = dados.email;
        entity.is_active = dados.is_active;
        if(dados.senha){entity.senha = await bcrypt.hash(dados.senha,10);}
        const res = await this.professorRepository.atualizaProfessor(id,entity);
        return {
            "id":res.id,
            "nome":res.nome,
            "email":res.email,
            "createdAt":res.createdAt,
            "updatedAt":res.updatedAt,
            "is_active":res.is_active
        }
        
    }

    @Delete(':id')
    async deleteProfessor(@Param('id') id:string){
        // DELETE LOGICO
        const entity = new ProfessoresEntity()
        entity.is_active = false;
        const res = await this.professorRepository.atualizaProfessor(id,entity);
        return {
            "id":res.id,
            "email":res.email,
            "is_active":res.is_active
        }        
    }
}
