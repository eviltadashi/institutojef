import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaClient } from "prisma/src/generated/client";
import { AulasEntity } from "./aulas.entity";
import { v4 as uuid } from 'uuid';

const prisma = new PrismaClient();

@Injectable()
export class AulasRepository {
    
    async create(aula: AulasEntity, idCurso){

        const result = await prisma.aulas.create({
            data:aula
        })

        // Cria o Relacionamento entre Curso e a Aula usando a tabela de relacionamento "relation_curso_aulas"
        const dadosRelacionais = { "id" : uuid() , "id_curso" : idCurso, "id_aula": result.id}
        await prisma.relation_curso_aulas.create({
            data:dadosRelacionais,
        })
        return result;       
    }

    async update(dados: AulasEntity, id:string){
        const aula = await prisma.aulas.findUnique({where:{id}})
        if(!aula){throw new NotFoundException(`A aula com o ID ${id} não encontrado`);}
        return await prisma.aulas.update({
            data:dados, 
            where:{id}
        })
    }

    async list(){
        return await prisma.aulas.findMany();
    }

    async listById(id:string){
        return await prisma.aulas.findUnique({where:{id}});
    }

    async delete(id:string){
        // DELETE LOGICO
        const aula = await prisma.aulas.findUnique({where:{id}})
        if(!aula){throw new NotFoundException(`A aula com o ID ${id} não encontrado`);}
        return await prisma.aulas.update({
            where:{id},
            data: {is_active:false}
        })
    }
}