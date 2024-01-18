"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunosRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../prisma/src/generated/client/index.js");
const prisma = new client_1.PrismaClient();
let alunosRepository = class alunosRepository {
    async create(aluno) {
        return prisma.alunos.create({
            data: aluno,
        });
    }
    async listar() {
        return prisma.alunos.findMany();
    }
    async getAlunoId(id) {
        return prisma.alunos.findUnique({
            where: { id },
        });
    }
    async getAlunoEmail(email) {
        return prisma.alunos.findUnique({
            where: {
                email: email,
            }
        });
    }
    async atualizar(id, dadosAlunoUpdate) {
        const possivelAluno = await prisma.alunos.findUnique({ where: { id } });
        if (!possivelAluno) {
            throw new common_1.NotFoundException(`Aluno com ID ${id} não encontrado`);
        }
        Object.entries(dadosAlunoUpdate).forEach(([c, v]) => {
            if (c === 'id') {
                return;
            }
            possivelAluno[c] = v;
        });
        const res = prisma.alunos.update({
            where: { id },
            data: possivelAluno,
        });
        return res;
    }
    async remover(id) {
        const possivelAluno = await prisma.alunos.findUnique({
            where: { id },
        });
        if (!possivelAluno) {
            throw new common_1.NotFoundException(`Aluno com ID ${id} não encontrado`);
        }
        const res = prisma.alunos.delete({
            where: { id }
        });
        return res;
    }
    async existeComEmail(email) {
        const aluno = await prisma.alunos.findUnique({ where: { email } });
        return !!aluno;
    }
};
exports.alunosRepository = alunosRepository;
exports.alunosRepository = alunosRepository = __decorate([
    (0, common_1.Injectable)()
], alunosRepository);
//# sourceMappingURL=alunos.repository.js.map