import { Body, Controller, Get, Post, Put, Headers, UseGuards, Param, Delete } from "@nestjs/common";
import { CursosRepository } from "./cursos.repository";
import { CursosEntity } from "./cursos.entity";
import { CriarCursosDTO } from "./dto/criarCursos.DTO";
import { v4 as uuid } from 'uuid';
import { AuthGuard } from '@nestjs/passport';
import { JwtDecripty } from "src/decodeToken.service";
import { atualizaCursoDTO } from "./dto/atualizaCurso.DTO";
import { log } from "console";

@Controller('/cursos')
export class CursosController{

    constructor(
        private cursosRepository : CursosRepository,
        private jwtDecripty : JwtDecripty
    ){}


    @Post()
    @UseGuards(AuthGuard())
    async criarCursos(@Headers('Authorization') auth : string , @Body() dados : CriarCursosDTO){
        
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);

        if(userType==='professor'){
            const cursosEntity = new CursosEntity()
        
            cursosEntity.id = uuid();
            cursosEntity.nome = dados.nome;
            cursosEntity.descricao = dados.descricao;
            cursosEntity.banner = dados.banner;
            cursosEntity.is_active = dados.is_active;
            
            const result = await this.cursosRepository.create(cursosEntity)
            return result;
        }
        return {"mensagem":"Usuário não tem permissão para cadastrar cursos"}        
    }

    
    @Get()
    async listarCursos(){
        return await this.cursosRepository.get();
    }

    @Get(':id')
    async listarCursoPorId(@Param('id') id:string){
        return await this.cursosRepository.getById(id);
    }

    @Put(':id')
    async atualizarCursos(@Headers('Authorization') auth : string ,@Param('id') id:string, @Body() dados:atualizaCursoDTO){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){

            const entity = new CursosEntity()
            entity.nome = dados.nome;
            entity.descricao = dados.descricao;
            entity.banner = dados.banner;
            entity.is_active = dados.is_active;
            return await this.cursosRepository.update(id, entity);        

        }else{
            return {"message":"Usuário não tem permissão para alterar o cursos"}
        }
    }

    @Delete(':id')
    async removerCursos(@Headers('Authorization') auth : string ,@Param('id') id:string, @Body() dados:atualizaCursoDTO){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            const entity = new CursosEntity()
            entity.is_active = false;
            const ret =  await this.cursosRepository.update(id, entity);
            if(ret.is_active===false){
                return {
                    "message":"Curso desativado com sucesso"
                }
            }

        }else{
            return {"message":"Usuário não tem permissão para remover o cursos"}
        }
    }



}