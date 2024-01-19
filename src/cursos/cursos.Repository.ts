import { Injectable, NotFoundException } from "@nestjs/common";
import { CursosEntity } from "./cursos.entity";
import { PrismaClient } from "prisma/src/generated/client";

const prisma = new PrismaClient();

@Injectable()
export class CursosRepository {

    async create(curso: CursosEntity){
        return await prisma.cursos.create({
            data: curso,
        })
    }

    async get(){
        return await prisma.cursos.findMany({
            where:{is_active: true}
        });
    }

    async getById(id:string){
        const retCurso = await prisma.cursos.findUnique({where: {id}});

        const retRelacionamentos = await prisma.relation_curso_aulas.findMany({
            where:{id_curso:id}
        })

        retCurso['aulas'] = [];
        for (const rel of retRelacionamentos) {
            const aula = await prisma.aulas.findUnique({ where: { id: rel.id_aula } });
            retCurso['aulas'].push(aula);
        }

        return retCurso;

    }

    async update(id:string, data: Partial<CursosEntity>){
        const curso = await prisma.cursos.findUnique({where:{id}})
        if(!curso){throw new NotFoundException(`Curso com ID ${id} não encontrado`);}
        return prisma.cursos.update({
            where:{id},
            data: data,
        })
    }
}