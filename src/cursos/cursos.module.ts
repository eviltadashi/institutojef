import { Module } from "@nestjs/common";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtDecripty } from 'src/decodeToken.service';
import { CursosController } from './cursos.controller';
import { CursosRepository } from './cursos.repository';

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' }), JwtModule],
    controllers: [CursosController],
    providers:[CursosRepository , JwtDecripty]
})

export class cursosModule {}