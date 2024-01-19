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
const atualizaAlunoDTO_1 = require("./dto/atualizaAlunoDTO");
const uuid_1 = require("uuid");
const bcrypt = require("bcrypt");
const passport_1 = require("@nestjs/passport");
const decodeToken_service_1 = require("../decodeToken.service");
let alunosController = class alunosController {
    constructor(alunosRepository, jwtDecripty) {
        this.alunosRepository = alunosRepository;
        this.jwtDecripty = jwtDecripty;
    }
    async createAluno(auth, dadosAluno) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            const alunoEntity = new aluno_entity_1.AlunoEntity();
            alunoEntity.id = (0, uuid_1.v4)();
            alunoEntity.nome = dadosAluno.nome;
            alunoEntity.email = dadosAluno.email;
            alunoEntity.is_active = dadosAluno.is_active;
            alunoEntity.senha = await bcrypt.hash(dadosAluno.senha, 10);
            alunoEntity.userType = 'aluno';
            const result = await this.alunosRepository.create(alunoEntity);
            return {
                "id": result.id,
                "nome": result.nome,
                "email": result.email
            };
        }
        return { 'msg': 'Você não possuí privilégios para acessar essa rota' };
    }
    async listaAlunos(auth) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            return await this.alunosRepository.listar();
        }
        return { 'msg': 'Você não possuí privilégios para acessar essa rota' };
    }
    async listaAlunosId(id) {
        const retAluno = await this.alunosRepository.getAlunoId(id);
        if (!retAluno) {
            throw new common_1.NotFoundException(`Aluno com ID ${id} não encontrado`);
        }
        return { 'msg': 'Você não possuí privilégios para acessar essa rota' };
    }
    async listaAlunoEmail(auth, email) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            return await this.alunosRepository.getAlunoEmail(email);
        }
        return { 'msg': 'Você não possuí privilégios para acessar essa rota' };
    }
    async atualizaAluno(id, dadosAlunoUpdate) {
        const alunoEntity = new aluno_entity_1.AlunoEntity();
        alunoEntity.nome = dadosAlunoUpdate.nome;
        alunoEntity.email = dadosAlunoUpdate.email;
        if (dadosAlunoUpdate.senha) {
            alunoEntity.senha = await bcrypt.hash(dadosAlunoUpdate.senha, 10);
        }
        const res = await this.alunosRepository.atualizar(id, alunoEntity);
        return {
            "id": res.id,
            "nome": res.nome,
            "email": res.email,
            "createdAt": res.createdAt,
            "updatedAt": res.updatedAt,
            "is_active": res.is_active
        };
    }
    async removeAluno(id) {
        const entity = new aluno_entity_1.AlunoEntity();
        entity.is_active = false;
        const res = await this.alunosRepository.atualizar(id, entity);
        return {
            "id": res.id,
            "email": res.email,
            "is_active": res.is_active
        };
    }
};
exports.alunosController = alunosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, criaAlunoDTO_1.CriarAlunoDTO]),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "createAluno", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "listaAlunos", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "listaAlunosId", null);
__decorate([
    (0, common_1.Get)('email/:email'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "listaAlunoEmail", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizaAlunoDTO_1.atualizaAlunoDTO]),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "atualizaAluno", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], alunosController.prototype, "removeAluno", null);
exports.alunosController = alunosController = __decorate([
    (0, common_1.Controller)('/alunos'),
    __metadata("design:paramtypes", [alunos_repository_1.alunosRepository,
        decodeToken_service_1.JwtDecripty])
], alunosController);
//# sourceMappingURL=alunos.controller.js.map