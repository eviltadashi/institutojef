import { Module } from "@nestjs/common";
import { JwtDecripty } from "src/decodeToken.service";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { ProgressController } from "./progress.controller";
import { ProgressRepository } from "./progress.repository";

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt'}), JwtModule],
    controllers: [ProgressController],
    providers: [ProgressRepository, JwtDecripty],
})

export class ProgressModule {}