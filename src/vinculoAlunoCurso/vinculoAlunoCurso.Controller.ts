import { Body, Controller, Post, Get, Put, Delete, UseGuards, Param, Headers } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtDecripty } from "src/decodeToken.service";
import { VinculoAlunoCursoRepository } from "./vinculoAlunoCurso.repository";
import { criarVinculoAlunoCursoDTO } from "./dto/createVinculoAlunoCurso.dto";
import { atualizarVinculoAuloCursoDTO } from "./dto/updateVinculoAlunoCurso.dto";

@Controller('vinculo_aluno_curso')
export class VinculoAlunoCursoController{

    constructor (
        private jwtDecripty : JwtDecripty,
        private vinculoAlunoCursoRepository : VinculoAlunoCursoRepository
    ){}

    @Post()
    @UseGuards(AuthGuard())
    async criarVinculoAlunoCurso(@Body() data : criarVinculoAlunoCursoDTO){
        const res = await this.vinculoAlunoCursoRepository.createVinculo(data.idAluno, data.idCurso)
        return {
            success:true,
            message:'Aluno cadastrado no curso com sucesso!',
            data: res
        }
    }

    @Put('/:id')
    @UseGuards(AuthGuard())
    async atualizarStatusCurso(@Headers('Authorization') auth : string, @Param('id') id:string , @Body() dados : atualizarVinculoAuloCursoDTO ){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            const res =  await this.vinculoAlunoCursoRepository.updateVinculo(id, dados.status)
            return {
                success:true,
                message:'Status do curso!',
                data: res
            }
        }
        return {"mensagem":"Você não tem permissão para acessar estes dados"}  
    }

    @Delete('/:id')
    @UseGuards(AuthGuard())
    async excluirVinculoAlunoCurso(@Headers('Authorization') auth : string, @Param('id') id:string){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            const res = await this.vinculoAlunoCursoRepository.deleteVinculo(id);
            return {
                success:true,
                message:'Curso removido com sucesso',
                data: res
            }
        }
        return {"mensagem":"Você não tem permissão para acessar estes dados"}
    }

    @Get('/id_aluno/:id')
    @UseGuards(AuthGuard())
    async buscaCursosDoAluno(@Param('id') idAluno:string){
        return this.vinculoAlunoCursoRepository.getVinculoIdAluno(idAluno)
    }

    @Get('/id_curso/:id')
    @UseGuards(AuthGuard())
    async buscaAlunosDoCurso(@Headers('Authorization') auth : string, @Param('id') idCurso:string){
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if(userType==='professor'){
            return this.vinculoAlunoCursoRepository.getVinculoIdCurso(idCurso)
        }
        return {"mensagem":"Você não tem permissão para acessar estes dados"}
    }

}