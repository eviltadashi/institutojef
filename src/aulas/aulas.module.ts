import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtDecripty } from "src/decodeToken.service";
import { AulasController } from "./aulas.controller";
import { AulasRepository } from "./aulas.repository";

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule],
    controllers: [AulasController],
    providers:[AulasRepository , JwtDecripty]
})

export class AulasModule {}