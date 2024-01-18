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
exports.CursosController = void 0;
const common_1 = require("@nestjs/common");
const cursos_repository_1 = require("./cursos.repository");
const cursos_entity_1 = require("./cursos.entity");
const criarCursos_DTO_1 = require("./dto/criarCursos.DTO");
const uuid_1 = require("uuid");
const passport_1 = require("@nestjs/passport");
const decodeToken_service_1 = require("../decodeToken.service");
const atualizaCurso_DTO_1 = require("./dto/atualizaCurso.DTO");
let CursosController = class CursosController {
    constructor(cursosRepository, jwtDecripty) {
        this.cursosRepository = cursosRepository;
        this.jwtDecripty = jwtDecripty;
    }
    async criarCursos(auth, dados) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            const cursosEntity = new cursos_entity_1.CursosEntity();
            cursosEntity.id = (0, uuid_1.v4)();
            cursosEntity.nome = dados.nome;
            cursosEntity.descricao = dados.descricao;
            cursosEntity.banner = dados.banner;
            cursosEntity.is_active = dados.is_active;
            const result = await this.cursosRepository.create(cursosEntity);
            return result;
        }
        return { "mensagem": "Usuário não tem permissão para cadastrar cursos" };
    }
    async listarCursos() {
        return await this.cursosRepository.get();
    }
    async listarCursoPorId(id) {
        return await this.cursosRepository.getById(id);
    }
    async atualizarCursos(auth, id, dados) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            const entity = new cursos_entity_1.CursosEntity();
            entity.nome = dados.nome;
            entity.descricao = dados.descricao;
            entity.banner = dados.banner;
            entity.is_active = dados.is_active;
            return await this.cursosRepository.update(id, entity);
        }
        else {
            return { "message": "Usuário não tem permissão para alterar o cursos" };
        }
    }
    async removerCursos(auth, id, dados) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            const entity = new cursos_entity_1.CursosEntity();
            entity.is_active = false;
            const ret = await this.cursosRepository.update(id, entity);
            if (ret.is_active === false) {
                return {
                    "message": "Curso desativado com sucesso"
                };
            }
        }
        else {
            return { "message": "Usuário não tem permissão para remover o cursos" };
        }
    }
};
exports.CursosController = CursosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, criarCursos_DTO_1.CriarCursosDTO]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "criarCursos", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "listarCursos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "listarCursoPorId", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, atualizaCurso_DTO_1.atualizaCursoDTO]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "atualizarCursos", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, atualizaCurso_DTO_1.atualizaCursoDTO]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "removerCursos", null);
exports.CursosController = CursosController = __decorate([
    (0, common_1.Controller)('/cursos'),
    __metadata("design:paramtypes", [cursos_repository_1.CursosRepository,
        decodeToken_service_1.JwtDecripty])
], CursosController);
//# sourceMappingURL=cursos.controller.js.map