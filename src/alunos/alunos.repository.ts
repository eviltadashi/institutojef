import { Injectable, NotFoundException } from "@nestjs/common";
import { AlunoEntity } from "./aluno.entity";
import { PrismaClient } from "prisma/src/generated/client";

const prisma = new PrismaClient();

@Injectable()
export class alunosRepository{

    async create(aluno: AlunoEntity){
        return prisma.alunos.create({
            data: aluno,
        });
    }

    async listar(){
        return prisma.alunos.findMany();
    }

    async getAlunoId(id:string ) {
        return prisma.alunos.findUnique({
            where: {id},
        })
    }

    async getAlunoEmail(email: string) {
        return prisma.alunos.findUnique({
            where: {
                email: email,
            }
        })
    }

    async atualizar(id: string, dadosAlunoUpdate: Partial<AlunoEntity>){
        const possivelAluno =  await prisma.alunos.findUnique({where: {id}})
        if(!possivelAluno){throw new NotFoundException(`Aluno com ID ${id} não encontrado`);}
        Object.entries(dadosAlunoUpdate).forEach(([c,v])=>{
            if(c==='id'){return;}
            possivelAluno[c] = v;
        });
        const res = prisma.alunos.update({
            where: { id },
            data: possivelAluno,
        });
        return res;
    }

    async remover(id: string){
        const possivelAluno =  await prisma.alunos.findUnique({
            where: {id},
        })
        if(!possivelAluno){
            throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
        }
        const res = prisma.alunos.delete({
            where: { id }
        });
        return res;
    }
   
    async existeComEmail(email:string) : Promise<boolean> {
        const aluno = await prisma.alunos.findUnique({where:{email}});
        return !!aluno;
    }

}