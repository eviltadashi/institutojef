"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.professoresRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../prisma/src/generated/client/index.js");
const prisma = new client_1.PrismaClient();
let professoresRepository = class professoresRepository {
    constructor() {
        this.professores = [];
    }
    async listarProfessores() {
        const ret = prisma.professores.findMany();
        return ret;
    }
    async listarProfessorPorID(id) {
        const ret = prisma.professores.findUnique({
            where: { id },
        });
        return ret;
    }
    async criarProfessor(dados) {
        return prisma.professores.create({
            data: dados,
        });
    }
    async atualizaProfessor(id, dados) {
        const possivelId = await prisma.professores.findUnique({ where: { id } });
        if (!possivelId) {
            throw new common_1.NotFoundException(`ID ${id} não encontrado`);
        }
        Object.entries(dados).forEach(([c, v]) => {
            if (c === 'id') {
                return;
            }
            possivelId[c] = v;
        });
        const res = prisma.professores.update({
            where: { id },
            data: possivelId
        });
        return res;
    }
    async emailVerify(email) {
        const professor = await prisma.professores.findUnique({ where: { email: email } });
        return !!professor;
    }
};
exports.professoresRepository = professoresRepository;
exports.professoresRepository = professoresRepository = __decorate([
    (0, common_1.Injectable)()
], professoresRepository);
//# sourceMappingURL=professores.repository.js.map