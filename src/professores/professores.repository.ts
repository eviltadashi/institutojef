import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaClient, professores } from "prisma/src/generated/client";
import { ProfessoresEntity } from "./professores.entity";



const prisma = new PrismaClient();

@Injectable()
export class professoresRepository {

    private professores: ProfessoresEntity[] = [];

    async listarProfessores(){
        const ret = prisma.professores.findMany();
        return ret;
    }

    async listarProfessorPorID(id:string){
        const ret =  prisma.professores.findUnique({
            where: {id},
        })
        return ret;
    }

    async criarProfessor(dados: ProfessoresEntity){
        return prisma.professores.create({
            data: dados,
        })
    }

    async atualizaProfessor(id:string, dados: ProfessoresEntity){
        const possivelId = await prisma.professores.findUnique({ where: {id} })
        if(!possivelId){
            throw new NotFoundException(`ID ${id} não encontrado`);
        }
        Object.entries(dados).forEach(
            ([c,v])=>{
                if(c==='id'){return;}
                possivelId[c] = v;
            }
        );

        const res = prisma.professores.update({
            where:{id},
            data: possivelId
        });
        return res;
    }

    async emailVerify(email:string) : Promise<boolean>{
        const professor = await prisma.professores.findUnique({where:{email:email}});
        return !!professor;
    }

}