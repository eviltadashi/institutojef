import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaClient } from "prisma/src/generated/client";

const prisma = new PrismaClient();

@Injectable()
export class ProgressRepository {
   

    async updateVisualizacao(id, dados) {
        const content = await prisma.progress_curso_aulas.findUnique({ where: { id } });
        if (!content) {throw new NotFoundException(`Não foi possível localizar conteúdo com id ${id}`);}
        const ret =  await prisma.progress_curso_aulas.update({
            where: { id },
            data: dados
        })


        const aulasConcluidas = await prisma.progress_curso_aulas.findMany({where:{id_curso:ret.id_curso}})
        var concluido = true;
        var nao_iniciado = false;
        for(const aulaConcluida of aulasConcluidas){
            if(aulaConcluida.visualizado === false){
                concluido = false;
            }
        }
        if(concluido===true){
            await prisma.relation_aluno_curso.updateMany({
                data: {status:'finalizado'},
                where: {id_curso: ret.id_curso}
            });
        }else{
            await prisma.relation_aluno_curso.updateMany({
                data: {status:'em_andamento'},
                where: {id_curso: ret.id_curso}
            });
        }
        return ret;
    }
}
