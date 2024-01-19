import { Controller, Delete, Get, Post, Put, UseGuards, Headers, Body, Param } from "@nestjs/common";
import { AulasCounteudoRepository } from "./aulasConteudo.repository";
import { AulaConteudoEntity } from "./aulasConteudo.entity";
import { CriaAulasConteudoDTO } from "./dto/criaAulasConteudo.dto";
import { AuthGuard } from "@nestjs/passport";
import { JwtDecripty } from "src/decodeToken.service";
import { v4 as uuid } from 'uuid';
import { CriarAulasDTO } from "src/aulas/dto/criarAulas.dto";
import { AtualizaAulasConteudoDTO } from "./dto/atualizaAulasConteudo.dto";

@Controller('aulas_conteudo')
export class AulasCounteudoController {
    constructor(
        private jwtDecripty : JwtDecripty,
        private AulasConteudoRepository : AulasCounteudoRepository,
    ){}

    @Post()
    @UseGuards(AuthGuard())
    async criarConteudo(@Headers('Authorization') auth : string, @Body() dados : CriaAulasConteudoDTO){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        const bufferFromBase64 = Buffer.from(dados.conteudo, 'base64');
        if(userType==='professor'){
            const entity = new AulaConteudoEntity()
            entity.id = uuid();
            entity.id_aula = dados.id_aula;
            entity.nome = dados.nome;
            entity.conteudo = bufferFromBase64;
            const result =  await this.AulasConteudoRepository.createConteudo(entity);
            return result
        }
        return {"mensagem":"Você não tem permissão para acessar essa api"} 
    }

    @Get('/:id')
    @UseGuards(AuthGuard())
    async listarConteudoPorId( @Headers('Authorization') auth : string, @Param('id') id:string ){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            return await this.AulasConteudoRepository.getConteudoById(id);
        }
        return {"mensagem":"Você não tem permissão para acessar essa api"} 
    }

    @Get('/aula/:id')
    @UseGuards(AuthGuard())
    async listarConteudoPorAula( @Headers('Authorization') auth : string, @Param('id') id:string ){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            return await this.AulasConteudoRepository.getConteudoByIdAula(id);
        }
        return {"mensagem":"Você não tem permissão para acessar essa api"} 
    }

    @Put('/:id')
    @UseGuards(AuthGuard())
    async atualizarConteudo(@Headers('Authorization') auth : string, @Param('id') id:string, @Body() dados:AtualizaAulasConteudoDTO){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            const entity = new AulaConteudoEntity()
            entity.nome = dados.nome;
            entity.conteudo = dados.conteudo !== undefined ? Buffer.from(dados.conteudo, 'base64') : undefined;
            const ret = await this.AulasConteudoRepository.updateConteudo(id, entity);
            return ret;
        }
        return {"mensagem":"Você não tem permissão para acessar essa api"} 
    }

    @Delete('/:id')
    @UseGuards(AuthGuard())
    async removerConteudo(@Headers('Authorization') auth : string, @Param('id') id:string){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            return await this.AulasConteudoRepository.deleteConteudo(id);
        }
        return {"mensagem":"Você não tem permissão para acessar essa api"} 
        
    }

}
