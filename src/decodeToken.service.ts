import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from 'prisma/src/generated/client';

const prisma = new PrismaClient();

@Injectable()
export class JwtDecripty{
    constructor(private readonly jwtService : JwtService){}

    async decodeToken(token:string){
        const payload = this.jwtService.decode(token)
        const email = payload.email
        const aluno = await prisma.alunos.findUnique({where:{email}})
        const professor = await prisma.professores.findUnique({where:{email}})
        if(aluno && professor){
            return 'professor';
        }else if(professor){
            return 'professor';
        }else{
            return 'aluno';
        }
    }
}