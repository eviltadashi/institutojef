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
exports.AulasCounteudoController = void 0;
const common_1 = require("@nestjs/common");
const aulasConteudo_repository_1 = require("./aulasConteudo.repository");
const aulasConteudo_entity_1 = require("./aulasConteudo.entity");
const criaAulasConteudo_dto_1 = require("./dto/criaAulasConteudo.dto");
const passport_1 = require("@nestjs/passport");
const decodeToken_service_1 = require("../decodeToken.service");
const uuid_1 = require("uuid");
let AulasCounteudoController = class AulasCounteudoController {
    constructor(jwtDecripty, AulasConteudoRepository) {
        this.jwtDecripty = jwtDecripty;
        this.AulasConteudoRepository = AulasConteudoRepository;
    }
    async criarConteudo(auth, dados) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        const bufferFromBase64 = Buffer.from(dados.conteudo, 'base64');
        if (userType === 'professor') {
            const entity = new aulasConteudo_entity_1.AulaConteudoEntity();
            entity.id = (0, uuid_1.v4)();
            entity.id_aula = dados.id_aula;
            entity.nome = dados.nome;
            entity.conteudo = bufferFromBase64;
            const result = await this.AulasConteudoRepository.createConteudo(entity);
            return result;
        }
        return { "mensagem": "Você não tem permissão para acessar essa api" };
    }
    async listarConteudo(auth) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
        }
        return { "mensagem": "Você não tem permissão para acessar essa api" };
    }
    async atualizarConteudo(auth) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
        }
        return { "mensagem": "Você não tem permissão para acessar essa api" };
    }
    async removerConteudo(auth, id) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            return await this.AulasConteudoRepository.deleteConteudo(id);
        }
        return { "mensagem": "Você não tem permissão para acessar essa api" };
    }
};
exports.AulasCounteudoController = AulasCounteudoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, criaAulasConteudo_dto_1.CriaAulasConteudoDTO]),
    __metadata("design:returntype", Promise)
], AulasCounteudoController.prototype, "criarConteudo", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AulasCounteudoController.prototype, "listarConteudo", null);
__decorate([
    (0, common_1.Put)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AulasCounteudoController.prototype, "atualizarConteudo", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AulasCounteudoController.prototype, "removerConteudo", null);
exports.AulasCounteudoController = AulasCounteudoController = __decorate([
    (0, common_1.Controller)('aulas_conteudo'),
    __metadata("design:paramtypes", [decodeToken_service_1.JwtDecripty,
        aulasConteudo_repository_1.AulasCounteudoRepository])
], AulasCounteudoController);
//# sourceMappingURL=aulasConteudo.controller.js.map