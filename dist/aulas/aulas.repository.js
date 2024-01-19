"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulasRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../prisma/src/generated/client/index.js");
const uuid_1 = require("uuid");
const prisma = new client_1.PrismaClient();
let AulasRepository = class AulasRepository {
    async create(aula, idCurso) {
        const result = await prisma.aulas.create({
            data: aula
        });
        const dadosRelacionais = { "id": (0, uuid_1.v4)(), "id_curso": idCurso, "id_aula": result.id };
        await prisma.relation_curso_aulas.create({
            data: dadosRelacionais,
        });
        return result;
    }
    async update(dados, id) {
        const aula = await prisma.aulas.findUnique({ where: { id } });
        if (!aula) {
            throw new common_1.NotFoundException(`A aula com o ID ${id} não encontrado`);
        }
        return await prisma.aulas.update({
            data: dados,
            where: { id }
        });
    }
    async list() {
        return await prisma.aulas.findMany();
    }
    async listById(id) {
        return await prisma.aulas.findUnique({ where: { id } });
    }
    async delete(id) {
        const aula = await prisma.aulas.findUnique({ where: { id } });
        if (!aula) {
            throw new common_1.NotFoundException(`A aula com o ID ${id} não encontrado`);
        }
        return await prisma.aulas.update({
            where: { id },
            data: { is_active: false }
        });
    }
};
exports.AulasRepository = AulasRepository;
exports.AulasRepository = AulasRepository = __decorate([
    (0, common_1.Injectable)()
], AulasRepository);
//# sourceMappingURL=aulas.repository.js.map