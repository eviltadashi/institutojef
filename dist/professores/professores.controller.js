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
exports.professoresController = void 0;
const common_1 = require("@nestjs/common");
const professores_repository_1 = require("./professores.repository");
const criarProfessorDTO_1 = require("./dto/criarProfessorDTO");
const professores_entity_1 = require("./professores.entity");
const uuid_1 = require("uuid");
const atualizarProfessorDTO_1 = require("./dto/atualizarProfessorDTO");
const bcrypt = require("bcrypt");
let professoresController = class professoresController {
    constructor(professorRepository) {
        this.professorRepository = professorRepository;
    }
    async createNewProfessor(dados) {
        const entity = new professores_entity_1.ProfessoresEntity();
        entity.id = (0, uuid_1.v4)();
        entity.nome = dados.nome;
        entity.email = dados.email;
        entity.is_active = dados.is_active;
        entity.senha = await bcrypt.hash(dados.senha, 10);
        entity.userType = 'professor';
        const result = await this.professorRepository.criarProfessor(entity);
        return {
            "id": result.id,
            "nome": result.nome,
            "email": result.email
        };
    }
    async getProfessores() {
        const ret = await this.professorRepository.listarProfessores();
        return ret;
    }
    async getProfessoresById(id) {
        const ret = await this.professorRepository.listarProfessorPorID(id);
        return ret;
    }
    async updateProfessor(id, dados) {
        const entity = new professores_entity_1.ProfessoresEntity();
        entity.nome = dados.nome;
        entity.email = dados.email;
        entity.is_active = dados.is_active;
        if (dados.senha) {
            entity.senha = await bcrypt.hash(dados.senha, 10);
        }
        const res = await this.professorRepository.atualizaProfessor(id, entity);
        return {
            "id": res.id,
            "nome": res.nome,
            "email": res.email,
            "createdAt": res.createdAt,
            "updatedAt": res.updatedAt,
            "is_active": res.is_active
        };
    }
    async deleteProfessor(id) {
        const entity = new professores_entity_1.ProfessoresEntity();
        entity.is_active = false;
        const res = await this.professorRepository.atualizaProfessor(id, entity);
        return {
            "id": res.id,
            "email": res.email,
            "is_active": res.is_active
        };
    }
};
exports.professoresController = professoresController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criarProfessorDTO_1.CriarProfessorDTO]),
    __metadata("design:returntype", Promise)
], professoresController.prototype, "createNewProfessor", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], professoresController.prototype, "getProfessores", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], professoresController.prototype, "getProfessoresById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizarProfessorDTO_1.AtualizarProfessorDTO]),
    __metadata("design:returntype", Promise)
], professoresController.prototype, "updateProfessor", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], professoresController.prototype, "deleteProfessor", null);
exports.professoresController = professoresController = __decorate([
    (0, common_1.Controller)('/professores'),
    __metadata("design:paramtypes", [professores_repository_1.professoresRepository])
], professoresController);
//# sourceMappingURL=professores.controller.js.map