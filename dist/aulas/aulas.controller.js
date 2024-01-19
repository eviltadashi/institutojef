"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulasController = void 0;
const common_1 = require("@nestjs/common");
const aulas_repository_1 = require("./aulas.repository");
const decodeToken_service_1 = require("../decodeToken.service");
const criarAulas_dto_1 = require("./dto/criarAulas.dto");
const aulas_entity_1 = require("./aulas.entity");
const uuid_1 = require("uuid");
const client_1 = require("../../prisma/src/generated/client/index.js");
const atualizarAula_dto_1 = require("./dto/atualizarAula.dto");
const passport_1 = require("@nestjs/passport");
const prisma = new client_1.PrismaClient();
let AulasController = class AulasController {
    constructor(aulas, jwtDecripty) {
        this.aulas = aulas;
        this.jwtDecripty = jwtDecripty;
    }
    async criarAula(auth, dados) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            const entity = new aulas_entity_1.AulasEntity();
            entity.id = (0, uuid_1.v4)();
            entity.nome = dados.nome;
            entity.descricao = dados.descricao;
            entity.is_active = dados.is_active;
            const result = await this.aulas.create(entity, dados.idCurso);
            return result;
        }
        return { "mensagem": "Usuário não tem permissão para cadastrar aulas" };
    }
    async listarAulas() {
        return await this.aulas.list();
    }
    async listarAulasPorId(id) {
        return await this.aulas.listById(id);
    }
    async atualizarAulas(auth, id, dados) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            const entity = new aulas_entity_1.AulasEntity();
            entity.nome = dados.nome;
            entity.descricao = dados.descricao;
            entity.is_active = dados.is_active;
            const result = await this.aulas.update(entity, id);
            return result;
        }
        return { "mensagem": "Usuário não tem permissão para cadastrar aulas" };
    }
    async removerAula(auth, id) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            const result = await this.aulas.delete(id);
            return {
                'success': true,
                'message': 'Aula desativado com sucesso',
                'data': result
            };
        }
        return { "mensagem": "Usuário não tem permissão para cadastrar aulas" };
    }
};
exports.AulasController = AulasController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, criarAulas_dto_1.CriarAulasDTO]),
    __metadata("design:returntype", Promise)
], AulasController.prototype, "criarAula", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AulasController.prototype, "listarAulas", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AulasController.prototype, "listarAulasPorId", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, atualizarAula_dto_1.atualizaAulaDTO]),
    __metadata("design:returntype", Promise)
], AulasController.prototype, "atualizarAulas", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AulasController.prototype, "removerAula", null);
exports.AulasController = AulasController = __decorate([
    (0, common_1.Controller)('/aulas'),
    __metadata("design:paramtypes", [aulas_repository_1.AulasRepository,
        decodeToken_service_1.JwtDecripty])
], AulasController);
//# sourceMappingURL=aulas.controller.js.map