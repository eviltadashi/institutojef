import { Module } from "@nestjs/common";
import { professoresController } from "./professores.controller";

@Module(
    {
        controllers:[professoresController]
    }
)

export class professoresModule {
    
}