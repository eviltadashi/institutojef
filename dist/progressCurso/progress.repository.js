"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../prisma/src/generated/client/index.js");
const prisma = new client_1.PrismaClient();
let ProgressRepository = class ProgressRepository {
    async updateVisualizacao(id, dados) {
        const content = await prisma.progress_curso_aulas.findUnique({ where: { id } });
        if (!content) {
            throw new common_1.NotFoundException(`Não foi possível localizar conteúdo com id ${id}`);
        }
        const ret = await prisma.progress_curso_aulas.update({
            where: { id },
            data: dados
        });
        const aulasConcluidas = await prisma.progress_curso_aulas.findMany({ where: { id_curso: ret.id_curso } });
        var concluido = true;
        var nao_iniciado = false;
        for (const aulaConcluida of aulasConcluidas) {
            if (aulaConcluida.visualizado === false) {
                concluido = false;
            }
        }
        if (concluido === true) {
            await prisma.relation_aluno_curso.updateMany({
                data: { status: 'finalizado' },
                where: { id_curso: ret.id_curso }
            });
        }
        else {
            await prisma.relation_aluno_curso.updateMany({
                data: { status: 'em_andamento' },
                where: { id_curso: ret.id_curso }
            });
        }
        return ret;
    }
};
exports.ProgressRepository = ProgressRepository;
exports.ProgressRepository = ProgressRepository = __decorate([
    (0, common_1.Injectable)()
], ProgressRepository);
//# sourceMappingURL=progress.repository.js.map