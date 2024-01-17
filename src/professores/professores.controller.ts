import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { professoresRepository } from "./professores.repository";
import { CriarProfessorDTO } from "./dto/criarProfessorDTO";
import { ProfessoresEntity } from "./professores.entity";
import { v4 as uuid } from 'uuid';
import { listaProfessoresDTO } from "./dto/listaProfessoresDTO";

import * as bcrypt from 'bcrypt';





@Controller('/professores')

export class professoresController{
    constructor(private professorRepository: professoresRepository){}

    @Post()
    async createNewProfessor(@Body() dados: CriarProfessorDTO){
        console.log('ain, chegou aqui');
        const entity = new ProfessoresEntity()
        entity.id = uuid();
        entity.nome = dados.nome;
        entity.email = dados.email;
        entity.status = dados.status;
        entity.senha = await bcrypt.hash(dados.senha,10);
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
   


}
