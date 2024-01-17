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
exports.CriarProfessorDTO = void 0;
const class_validator_1 = require("class-validator");
const uniqueEmailProfessor_validator_1 = require("../validacao/uniqueEmailProfessor.validator");
class CriarProfessorDTO {
}
exports.CriarProfessorDTO = CriarProfessorDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome não pode ficar vazio' }),
    __metadata("design:type", String)
], CriarProfessorDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: 'E-Mail inválido' }),
    (0, uniqueEmailProfessor_validator_1.uniqueEmailProfessor)({ message: 'o Email informado já existe' }),
    __metadata("design:type", String)
], CriarProfessorDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: 'Senha deve conter o minimo de 6 caracteres' }),
    __metadata("design:type", String)
], CriarProfessorDTO.prototype, "senha", void 0);
//# sourceMappingURL=criarProfessorDTO.js.map