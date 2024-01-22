"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VinculoAlunoCursoRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../prisma/src/generated/client/index.js");
const uuid_1 = require("uuid");
const prisma = new client_1.PrismaClient();
let VinculoAlunoCursoRepository = class VinculoAlunoCursoRepository {
    async createVinculo(idAluno, idCurso) {
        const aluno = await prisma.alunos.findUnique({ where: { id: idAluno } });
        const curso = await prisma.cursos.findUnique({ where: { id: idCurso } });
        const vinculo = await prisma.relation_aluno_curso.findMany({ where: { id_aluno: idAluno, id_curso: idCurso } });
        if (!aluno) {
            throw new common_1.NotFoundException(`A aluno com o ID ${idAluno} não encontrado`);
        }
        if (!curso) {
            throw new common_1.NotFoundException(`A curso com o ID ${idCurso} não encontrado`);
        }
        if (Array.isArray(vinculo) && vinculo.length !== 0) {
            throw new common_1.ConflictException(`Aluno já cadastrado neste curso`);
        }
        const ret_vinculo = await prisma.relation_aluno_curso.create({ data: {
                id: (0, uuid_1.v4)(),
                id_aluno: idAluno,
                id_curso: idCurso,
                status: 'nao_iniciado'
            } });
        const aulas = await prisma.relation_curso_aulas.findMany({ where: { id_curso: idCurso } });
        for (const aula of aulas) {
            await prisma.progress_curso_aulas.create({ data: {
                    id: (0, uuid_1.v4)(),
                    id_aluno: idAluno,
                    id_curso: idCurso,
                    id_aula: aula.id_aula
                } });
        }
        return ret_vinculo;
    }
    async updateVinculo(id, novoStatus) {
        const vinculo = await prisma.relation_aluno_curso.findUnique({ where: { id } });
        if (!vinculo) {
            throw new common_1.NotFoundException(`Vínculo ${id} não encontrado`);
        }
        try {
            await prisma.relation_aluno_curso.update({
                where: { id },
                data: {
                    status: { set: novoStatus },
                },
            });
        }
        catch (error) {
            throw new Error(`Erro ao atualizar o vínculo: ${error.message}`);
        }
        return {
            success: true,
            message: `Status alteado para ${novoStatus}`
        };
    }
    async deleteVinculo(id) {
        const vinculo = await prisma.relation_aluno_curso.findUnique({ where: { id } });
        if (!vinculo) {
            throw new common_1.NotFoundException(`Vínculo ${id} não encontrado`);
        }
        try {
            const res = await prisma.relation_aluno_curso.delete({ where: { id } });
        }
        catch (error) {
            throw new Error(`Erro ao Excluir o vínculo: ${error.message}`);
        }
        return {
            success: true,
            message: `Vinculo excluido com sucesso`
        };
    }
    async getVinculoIdAluno(idAluno) {
        const vinculos = await prisma.relation_aluno_curso.findMany({ where: { id_aluno: idAluno } });
        if (vinculos.length === 0) {
            throw new common_1.NotFoundException(`Vínculo para o aluno de ID:  ${idAluno} não encontrado`);
        }
        const res = await prisma.alunos.findUnique({ where: { id: idAluno } });
        var aluno = {
            "id": res.id,
            "nome": res.nome,
            "email": res.email,
        };
        aluno['cursos'] = [];
        for (const vinculo of vinculos) {
            const curso = await prisma.cursos.findUnique({ where: { id: vinculo.id_curso } });
            const aulas = await prisma.relation_curso_aulas.findMany({ where: { id_curso: vinculo.id_curso } });
            curso['id_vinculo'] = vinculo.id;
            curso['status'] = vinculo.status;
            curso['aula'] = [];
            for (const aula of aulas) {
                const result_aula = await prisma.aulas.findUnique({ where: { id: aula.id_aula } });
                const progress = await prisma.progress_curso_aulas.findMany({ where: { id_aula: aula.id_aula } });
                for (const p of progress) {
                    const listaCurso = {
                        id: result_aula.id,
                        nome: result_aula.nome,
                        descricao: result_aula.descricao,
                        visualizado: p.visualizado,
                        visualizacao_id: p.id
                    };
                    curso['aula'].push(listaCurso);
                }
            }
            aluno['cursos'].push(curso);
        }
        return aluno;
    }
    async getVinculoIdCurso(idCurso) {
        const vinculos = await prisma.relation_aluno_curso.findMany({ where: { id_curso: idCurso } });
        if (vinculos.length === 0) {
            throw new common_1.NotFoundException(`Vínculo para o curso de ID:  ${idCurso} não encontrado`);
        }
        const res = await prisma.cursos.findUnique({ where: { id: idCurso } });
        var curso = {
            "id": res.id,
            "nome": res.nome,
            "descricao": res.descricao,
        };
        curso['alunos'] = [];
        for (const vinculo of vinculos) {
            const alunos = await prisma.alunos.findUnique({ where: { id: vinculo.id_aluno } });
            curso['alunos'].push(alunos);
        }
        return curso;
    }
};
exports.VinculoAlunoCursoRepository = VinculoAlunoCursoRepository;
exports.VinculoAlunoCursoRepository = VinculoAlunoCursoRepository = __decorate([
    (0, common_1.Injectable)()
], VinculoAlunoCursoRepository);
//# sourceMappingURL=vinculoAlunoCurso.repository.js.map