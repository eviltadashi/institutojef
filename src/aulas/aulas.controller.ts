import { Body, Controller, Delete, Get, Headers, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AulasRepository } from "./aulas.repository";
import { JwtDecripty } from "src/decodeToken.service";
import { CriarAulasDTO } from "./dto/criarAulas.dto";
import { AulasEntity } from "./aulas.entity";
import { v4 as uuid } from 'uuid';
import { PrismaClient } from "prisma/src/generated/client";
import { atualizaAulaDTO } from "./dto/atualizarAula.dto";
import { AuthGuard } from "@nestjs/passport";

const prisma = new PrismaClient();

@Controller('/aulas')
export class AulasController {

    constructor(
        private aulas : AulasRepository,
        private jwtDecripty : JwtDecripty
    ){}

    @Post()
    @UseGuards(AuthGuard())
    async criarAula(@Headers('Authorization') auth : string, @Body() dados : CriarAulasDTO){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            const entity = new AulasEntity()
            entity.id = uuid();
            entity.nome = dados.nome;
            entity.descricao = dados.descricao;
            entity.is_active = dados.is_active;
            const result = await this.aulas.create(entity, dados.idCurso)
            return result;
        }
        return {"mensagem":"Usuário não tem permissão para cadastrar aulas"}
    }

    @Get()
    @UseGuards(AuthGuard())
    async listarAulas(){
        return await this.aulas.list();
    }

    @Get('/:id')
    @UseGuards(AuthGuard())
    async listarAulasPorId(@Param('id') id:string){
        return await this.aulas.listById(id)
    }

    @Put('/:id')
    @UseGuards(AuthGuard())
    async atualizarAulas(@Headers('Authorization') auth : string , @Param('id') id:string, @Body() dados: atualizaAulaDTO){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            const entity = new AulasEntity()
            entity.nome = dados.nome;
            entity.descricao = dados.descricao;
            entity.is_active = dados.is_active;
            const result = await this.aulas.update(entity, id)
            return result;
        }
        return {"mensagem":"Usuário não tem permissão para cadastrar aulas"}
    }

    @Delete('/:id')
    @UseGuards(AuthGuard())
    async removerAula(@Headers('Authorization') auth : string , @Param('id') id:string){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            const result = await this.aulas.delete(id)
            return {
                'success':true,
                'message':'Aula desativado com sucesso',
                'data':result
            }
        }
        return {"mensagem":"Usuário não tem permissão para cadastrar aulas"}
    }
}