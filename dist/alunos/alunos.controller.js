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
exports.alunosController = void 0;
const common_1 = require("@nestjs/common");
const alunos_repository_1 = require("./alunos.repository");
const criaAlunoDTO_1 = require("./dto/criaAlunoDTO");
const aluno_entity_1 = require("./aluno.entity");
const uuid_1 = require("uuid");
const listaAlunoDTO_1 = require("./dto/listaAlunoDTO");
const atualizaAlunoDTO_1 = require("./dto/atualizaAlunoDTO");
const bcrypt = require("bcrypt");
const passport_1 = require("@nestjs/passport");
let alunosController = class alunosController {
    constructor(alunosRepository) {
        this.alunosRepository = alunosRepository;
    }
    async createAluno(dadosAluno) {
        const alunoEntity = new aluno_entity_1.AlunoEntity();
        alunoEntity.id = (0, uuid_1.v4)();
        alunoEntity.nome = dadosAluno.nome;
        alunoEntity.email = dadosAluno.email;
        alunoEntity.senha = await bcrypt.hash(dadosAluno.senha, 10);
        this.alunosRepository.create(alunoEntity);
        return {
            "success": true,
            "message": "Aluno criado com sucesso",
            "alunos": new listaAlunoDTO_1.listaAlunoDTO(alunoEntity.id, alunoEntity.nome, alunoEntity.email)
        };
    }
    async listaAlunos() {
        const retAlunos = await this.alunosRepository.listar();
        return retAlunos;
    }
    async listaAlunosId(id) {
        const retAluno = await this.alunosRepository.getAlunoId(id);
        if (!retAluno) {
            throw new common_1.NotFoundException(`Aluno com ID ${id} não encontrado`);
        }
        return retAluno;
    }
    async listaAlunoEmail(email) {
        const retAlunoEmail = await this.alunosRepository.getAlunoEmail(email);
        return retAlunoEmail;
    }
    async atualizaAluno(id, dadosAlunoUpdate) {
        const alunoEntity = new aluno_entity_1.AlunoEntity();
        alunoEntity.id = (0, uuid_1.v4)();
        alunoEntity.nome = dadosAlunoUpdate.nome;
        alunoEntity.email = dadosAlunoUpdate.email;
        alunoEntity.senha = await bcrypt.hash(dadosAlunoUpdate.senha, 10);
        this.alunosRepository.atualizar(id, alunoEntity);
        return {
            "success": true,
            "message": "Alterações Realizadas com Sucesso",
            "aluno": new listaAlunoDTO_1.listaAlunoDTO(alunoEntity.id, alunoEntity.nome, alunoEntity.email)
        };
    }
    async removeAluno(id) {
        const response = await this.alunosRepository.remover(id);
        return response;
    }
};
exports.alunosController = alunosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criaAlunoDTO_1.CriarAlunoDTO]),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "createAluno", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "listaAlunos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "listaAlunosId", null);
__decorate([
    (0, common_1.Get)('email/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "listaAlunoEmail", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizaAlunoDTO_1.atualizaAlunoDTO]),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "atualizaAluno", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "removeAluno", null);
exports.alunosController = alunosController = __decorate([
    (0, common_1.Controller)('/alunos'),
    __metadata("design:paramtypes", [alunos_repository_1.alunosRepository])
], alunosController);
//# sourceMappingURL=alunos.controller.js.map