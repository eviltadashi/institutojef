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
const bcrypt = require("bcrypt");
let professoresController = class professoresController {
    constructor(professorRepository) {
        this.professorRepository = professorRepository;
    }
    async createNewProfessor(dados) {
        console.log('ain, chegou aqui');
        const entity = new professores_entity_1.ProfessoresEntity();
        entity.id = (0, uuid_1.v4)();
        entity.nome = dados.nome;
        entity.email = dados.email;
        entity.status = dados.status;
        entity.senha = await bcrypt.hash(dados.senha, 10);
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
exports.professoresController = professoresController = __decorate([
    (0, common_1.Controller)('/professores'),
    __metadata("design:paramtypes", [professores_repository_1.professoresRepository])
], professoresController);
//# sourceMappingURL=professores.controller.js.map