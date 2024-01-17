import { Module } from "@nestjs/common";
import { professoresController } from "./professores.controller";
import { professoresRepository } from "./professores.repository";
import { verifyUniqueEmailProfessor } from "./validacao/uniqueEmailProfessor.validator";
import { PassportModule } from '@nestjs/passport';
@Module(
    {
        imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
        controllers:[professoresController],
        providers:[professoresRepository, verifyUniqueEmailProfessor]
    }
)
export class professoresModule {}