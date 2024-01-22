import { Module } from "@nestjs/common";
import { professoresController } from "./professores.controller";
import { professoresRepository } from "./professores.repository";
import { verifyUniqueEmailProfessor } from "./validacao/uniqueEmailProfessor.validator";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from "@nestjs/jwt";
import { JwtDecripty } from "src/decodeToken.service";
@Module(
    {
        imports: [PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule],
        controllers:[professoresController],
        providers:[professoresRepository, verifyUniqueEmailProfessor, JwtDecripty]
    }
)
export class professoresModule {}