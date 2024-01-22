import { Controller, Put, UseGuards, Headers, Param, Body } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtDecripty } from "src/decodeToken.service";
import { ProgressDTO } from "./dto/atualizaProgress.dto";
import { ProgressRepository } from "./progress.repository";
import { ProgressEntity } from "./progress.entity";
import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";

@Controller('visualizacao_aula')
@ApiTags('visualizacao_aula')
@ApiParam({ name: 'id', description: 'User ID' })
export class ProgressController {
    constructor(
        private jwtDecripty : JwtDecripty,
        private ProgressRepository : ProgressRepository,
    ){}
    @Put('/:id')
    @UseGuards(AuthGuard())
    async atualizarConteudo(@Headers('Authorization') auth : string, @Param('id') id:string, @Body() dados:ProgressDTO){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        const entity = new ProgressEntity()
        entity.visualizado = dados.visualizado;
        const ret = await this.ProgressRepository.updateVisualizacao(id,dados)
        return ret;
    }
}