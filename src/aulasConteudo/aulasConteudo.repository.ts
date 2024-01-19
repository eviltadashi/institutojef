import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaClient } from "prisma/src/generated/client";
import { AulaConteudoEntity } from "./aulasConteudo.entity";

const prisma = new PrismaClient();

@Injectable()
export class AulasCounteudoRepository {

    async createConteudo(dados: AulaConteudoEntity){
        return await prisma.aulas_conteudo.create({data: dados});
    }

    async updateConteudo(id:string, dados: AulaConteudoEntity){
        const content = prisma.aulas_conteudo.findUnique({where:{id}})
        if(!content){ throw new NotFoundException(`Não foi possivel localisar conteudo com id ${id}}`)}
    }

    async deleteConteudo(id:string){
        const content = await prisma.aulas_conteudo.findUnique({where:{id}})
        if(!content){ throw new NotFoundException(`Não foi possivel localisar conteudo com id ${id}}`)}
        const ret = await prisma.aulas_conteudo.delete({where:{id}})
        return {
            success:true,
            message:'conteudo da aula removido com sucesso',
            id: ret.id,
            id_aula: ret.id_aula,
            nome: ret.nome
        }
    }
    async getConteudoByIdAula(id_aula:string){
        

    }
    async getConteudoById(id:string){
        const content = prisma.aulas_conteudo.findUnique({where:{id}})
        if(!content){ throw new NotFoundException(`Não foi possivel localisar conteudo com id ${id}}`)}

    }


}
