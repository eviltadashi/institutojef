import { Module } from "@nestjs/common";
import { AulasCounteudoRepository } from "./aulasConteudo.repository";
import { JwtDecripty } from "src/decodeToken.service";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AulasCounteudoController } from "./aulasConteudo.controller";

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt'}), JwtModule],
    controllers: [AulasCounteudoController],
    providers: [AulasCounteudoRepository, JwtDecripty],
})

export class AulasConteudoModule {}