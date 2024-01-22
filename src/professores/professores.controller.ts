import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, Headers } from "@nestjs/common";
import { professoresRepository } from "./professores.repository";
import { CriarProfessorDTO } from "./dto/criarProfessorDTO";
import { ProfessoresEntity } from "./professores.entity";
import { AtualizarProfessorDTO } from "./dto/atualizarProfessorDTO";
import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { AuthGuard } from "@nestjs/passport";
import { JwtDecripty } from "src/decodeToken.service";

@Controller('/professores')

export class professoresController{
    constructor(
        private professorRepository: professoresRepository,
        private jwtDecripty : JwtDecripty,
    ){}

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
    @UseGuards(AuthGuard())
    async getProfessores(@Headers('Authorization') auth : string ){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            return await this.professorRepository.listarProfessores();
        }
        return {"mensagem":"Você não tem permissão para acessar estes dados"}       
    }

    @Get('/:id')
    @UseGuards(AuthGuard())
    async getProfessoresById(@Headers('Authorization') auth : string, @Param('id') id:string){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            const ret = await this.professorRepository.listarProfessorPorID(id);
            return ret;
        }
        return {"mensagem":"Você não tem permissão para acessar estes dados"}
    }
       
    @Put('/:id')
    @UseGuards(AuthGuard())
    async updateProfessor(@Headers('Authorization') auth : string, @Param('id') id:string , @Body() dados:AtualizarProfessorDTO){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
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
        return {"mensagem":"Você não tem permissão para acessar estes dados"}
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    async deleteProfessor(@Headers('Authorization') auth : string, @Param('id') id:string){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
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
        return {"mensagem":"Você não tem permissão para realizar esta ação"}
    }
}
