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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriaAulasConteudoDTO = void 0;
const class_validator_1 = require("class-validator");
class CriaAulasConteudoDTO {
}
exports.CriaAulasConteudoDTO = CriaAulasConteudoDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O ID do curso deve ser preenchido' }),
    (0, class_validator_1.IsString)({ message: 'O ID do curso deve ser uma string' }),
    __metadata("design:type", String)
], CriaAulasConteudoDTO.prototype, "id_aula", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome do conteúdo deve ser preenchido informando se é um anexo ou um link' }),
    (0, class_validator_1.IsString)({ message: 'O nome do conteúdo deve ser uma string' }),
    __metadata("design:type", String)
], CriaAulasConteudoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O conteúdo deve ser enviado como base64' }),
    __metadata("design:type", String)
], CriaAulasConteudoDTO.prototype, "conteudo", void 0);
//# sourceMappingURL=criaAulasConteudo.dto.js.map