"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulasCounteudoRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../prisma/src/generated/client/index.js");
const prisma = new client_1.PrismaClient();
let AulasCounteudoRepository = class AulasCounteudoRepository {
    async createConteudo(dados) {
        return await prisma.aulas_conteudo.create({ data: dados });
    }
    async updateConteudo(id, dados) {
        const content = prisma.aulas_conteudo.findUnique({ where: { id } });
        if (!content) {
            throw new common_1.NotFoundException(`Não foi possivel localisar conteudo com id ${id}}`);
        }
        const ret = prisma.aulas_conteudo.update({
            where: { id },
            data: dados
        });
        return ret;
    }
    async deleteConteudo(id) {
        const content = await prisma.aulas_conteudo.findUnique({ where: { id } });
        if (!content) {
            throw new common_1.NotFoundException(`Não foi possivel localisar conteudo com id ${id}}`);
        }
        const ret = await prisma.aulas_conteudo.delete({ where: { id } });
        return {
            success: true,
            message: 'conteudo da aula removido com sucesso',
            id: ret.id,
            id_aula: ret.id_aula,
            nome: ret.nome
        };
    }
    async getConteudoByIdAula(id_aula) {
        const ret = await prisma.aulas_conteudo.findMany({ where: { id_aula: id_aula } });
        if (ret.length !== 0) {
            return ret;
        }
        else {
            throw new common_1.NotFoundException('Não foi localizado conteudos para essa aula');
        }
    }
    async getConteudoById(id) {
        const content = prisma.aulas_conteudo.findUnique({ where: { id } });
        if (!content) {
            throw new common_1.NotFoundException(`Não foi possivel localisar conteudo com id ${id}}`);
        }
        return content;
    }
};
exports.AulasCounteudoRepository = AulasCounteudoRepository;
exports.AulasCounteudoRepository = AulasCounteudoRepository = __decorate([
    (0, common_1.Injectable)()
], AulasCounteudoRepository);
//# sourceMappingURL=aulasConteudo.repository.js.map