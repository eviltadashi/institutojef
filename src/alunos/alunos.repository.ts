import { Injectable, NotFoundException } from "@nestjs/common";
import { AlunoEntity } from "./aluno.entity";
import { PrismaClient } from "prisma/src/generated/client";

const prisma = new PrismaClient();


@Injectable()
export class alunosRepository{

    private alunos: AlunoEntity[] = [];

    // POST Criar Aluno
    async create(aluno: AlunoEntity){
        return prisma.alunos.create({
            data: aluno,
        });
    }


    //GET findMany é pegar todos registros
    async listar(){
        return prisma.alunos.findMany();
    }

    //GET findMany é pegar todos registros
    async getAlunoId(id:string ) {
        return prisma.alunos.findUnique({
            where: {id},
        })
    }

    async getAlunoEmail(email:string ) {
        return prisma.alunos.findUnique({
            where: {email},
        })
    }

    async atualizar(id: string, dadosAlunoUpdate: Partial<AlunoEntity>){
        
        const possivelAluno =  await prisma.alunos.findUnique({
            where: {id},
        })


        if(!possivelAluno){
            throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
        }

        Object.entries(dadosAlunoUpdate).forEach(([c,v])=>{
            console.log('chave: '+ c , 'valor: '+ v);
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

        console.log(possivelAluno);
        
        if(!possivelAluno){
            throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
        }

        const res = prisma.alunos.delete({
            where: { id }
        });

        return res;
    }
   
    async existeComEmail(email:string){
        const possivelAluno = this.alunos.find(
            aluno => aluno.email === email
        );
        return possivelAluno !== undefined;
    }

}