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
exports.CriarAlunoDTO = void 0;
const class_validator_1 = require("class-validator");
const uniqueEmail_validator_1 = require("../validacao/uniqueEmail.validator");
class CriarAlunoDTO {
}
exports.CriarAlunoDTO = CriarAlunoDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome não pode ficar em branco' }),
    __metadata("design:type", String)
], CriarAlunoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: 'email invalido, verifique o campo.' }),
    (0, uniqueEmail_validator_1.uniqueEmail)({ message: 'E-mail já cadastrado' }),
    __metadata("design:type", String)
], CriarAlunoDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: 'Senha deve ter ao menos 6 caracteres' }),
    __metadata("design:type", String)
], CriarAlunoDTO.prototype, "senha", void 0);
//# sourceMappingURL=criaAlunoDTO.js.map