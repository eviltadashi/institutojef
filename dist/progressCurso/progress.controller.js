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
exports.ProgressController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const decodeToken_service_1 = require("../decodeToken.service");
const atualizaProgress_dto_1 = require("./dto/atualizaProgress.dto");
const progress_repository_1 = require("./progress.repository");
const progress_entity_1 = require("./progress.entity");
const swagger_1 = require("@nestjs/swagger");
let ProgressController = class ProgressController {
    constructor(jwtDecripty, ProgressRepository) {
        this.jwtDecripty = jwtDecripty;
        this.ProgressRepository = ProgressRepository;
    }
    async atualizarConteudo(auth, id, dados) {
        const token = auth.split(' ');
        const userType = await this.jwtDecripty.decodeToken(token[1]);
        if (userType === 'professor') {
            const entity = new progress_entity_1.ProgressEntity();
            entity.visualizado = dados.visualizado;
            const ret = await this.ProgressRepository.updateVisualizacao(id, dados);
            return ret;
        }
        return { "mensagem": "Você não tem permissão para acessar essa api" };
    }
};
exports.ProgressController = ProgressController;
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __param(0, (0, common_1.Headers)('Authorization')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, atualizaProgress_dto_1.ProgressDTO]),
    __metadata("design:returntype", Promise)
], ProgressController.prototype, "atualizarConteudo", null);
exports.ProgressController = ProgressController = __decorate([
    (0, common_1.Controller)('visualizacao_aula'),
    (0, swagger_1.ApiTags)('visualizacao_aula'),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'User ID' }),
    __metadata("design:paramtypes", [decodeToken_service_1.JwtDecripty,
        progress_repository_1.ProgressRepository])
], ProgressController);
//# sourceMappingURL=progress.controller.js.map