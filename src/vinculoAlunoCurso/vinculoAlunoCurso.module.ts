import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtDecripty } from "src/decodeToken.service";
import { VinculoAlunoCursoRepository } from "./vinculoAlunoCurso.repository";
import { VinculoAlunoCursoController } from "./vinculoAlunoCurso.Controller";

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule],
    controllers: [VinculoAlunoCursoController],
    providers:[VinculoAlunoCursoRepository , JwtDecripty]
})

export class VinculoAlunoCursoModule {}