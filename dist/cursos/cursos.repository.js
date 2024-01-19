"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../prisma/src/generated/client/index.js");
const prisma = new client_1.PrismaClient();
let CursosRepository = class CursosRepository {
    async create(curso) {
        return await prisma.cursos.create({
            data: curso,
        });
    }
    async get() {
        return await prisma.cursos.findMany({
            where: { is_active: true }
        });
    }
    async getById(id) {
        const retCurso = await prisma.cursos.findUnique({ where: { id } });
        const retRelacionamentos = await prisma.relation_curso_aulas.findMany({
            where: { id_curso: id }
        });
        retCurso['aulas'] = [];
        for (const rel of retRelacionamentos) {
            const aula = await prisma.aulas.findUnique({ where: { id: rel.id_aula } });
            retCurso['aulas'].push(aula);
        }
        return retCurso;
    }
    async update(id, data) {
        const curso = await prisma.cursos.findUnique({ where: { id } });
        if (!curso) {
            throw new common_1.NotFoundException(`Curso com ID ${id} não encontrado`);
        }
        return prisma.cursos.update({
            where: { id },
            data: data,
        });
    }
};
exports.CursosRepository = CursosRepository;
exports.CursosRepository = CursosRepository = __decorate([
    (0, common_1.Injectable)()
], CursosRepository);
//# sourceMappingURL=cursos.repository.js.map