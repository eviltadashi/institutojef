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
exports.VinculoAlunoCursoController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const decodeToken_service_1 = require("../decodeToken.service");
const vinculoAlunoCurso_repository_1 = require("./vinculoAlunoCurso.repository");
const createVinculoAlunoCurso_dto_1 = require("./dto/createVinculoAlunoCurso.dto");
const updateVinculoAlunoCurso_dto_1 = require("./dto/updateVinculoAlunoCurso.dto");
let VinculoAlunoCursoController = class VinculoAlunoCursoController {
    constructor(jwtDecripty, vinculoAlunoCursoRepository) {
        this.jwtDecripty = jwtDecripty;
        this.vinculoAlunoCursoRepository = vinculoAlunoCursoRepository;
    }
    async criarVinculoAlunoCurso(data) {
        const res = await this.vinculoAlunoCursoRepository.createVinculo(data.idAluno, data.idCurso);
        return {
            success: true,
            message: 'Aluno cadastrado no curso com sucesso!',
            data: res
        };
    }
    async atualizarStatusCurso(auth, id, dados) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            const res = await this.vinculoAlunoCursoRepository.updateVinculo(id, dados.status);
            return {
                success: true,
                message: 'Status do curso!',
                data: res
            };
        }
        return { "mensagem": "Você não tem permissão para acessar estes dados" };
    }
    async excluirVinculoAlunoCurso(auth, id) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            const res = await this.vinculoAlunoCursoRepository.deleteVinculo(id);
            return {
                success: true,
                message: 'Curso removido com sucesso',
                data: res
            };
        }
        return { "mensagem": "Você não tem permissão para acessar estes dados" };
    }
    async buscaCursosDoAluno(idAluno) {
        return this.vinculoAlunoCursoRepository.getVinculoIdAluno(idAluno);
    }
    async buscaAlunosDoCurso(auth, idCurso) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            return this.vinculoAlunoCursoRepository.getVinculoIdCurso(idCurso);
        }
        return { "mensagem": "Você não tem permissão para acessar estes dados" };
    }
};
exports.VinculoAlunoCursoController = VinculoAlunoCursoController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createVinculoAlunoCurso_dto_1.criarVinculoAlunoCursoDTO]),
    __metadata("design:returntype", Promise)
], VinculoAlunoCursoController.prototype, "criarVinculoAlunoCurso", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, updateVinculoAlunoCurso_dto_1.atualizarVinculoAuloCursoDTO]),
    __metadata("design:returntype", Promise)
], VinculoAlunoCursoController.prototype, "atualizarStatusCurso", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VinculoAlunoCursoController.prototype, "excluirVinculoAlunoCurso", null);
__decorate([
    (0, common_1.Get)('/id_aluno/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VinculoAlunoCursoController.prototype, "buscaCursosDoAluno", null);
__decorate([
    (0, common_1.Get)('/id_curso/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VinculoAlunoCursoController.prototype, "buscaAlunosDoCurso", null);
exports.VinculoAlunoCursoController = VinculoAlunoCursoController = __decorate([
    (0, common_1.Controller)('vinculo_aluno_curso'),
    __metadata("design:paramtypes", [decodeToken_service_1.JwtDecripty,
        vinculoAlunoCurso_repository_1.VinculoAlunoCursoRepository])
], VinculoAlunoCursoController);
//# sourceMappingURL=vinculoAlunoCurso.Controller.js.map