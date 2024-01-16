"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alunosModule = void 0;
const common_1 = require("@nestjs/common");
const alunos_controller_1 = require("./alunos.controller");
const alunos_repository_1 = require("./alunos.repository");
const uniqueEmail_validator_1 = require("./validacao/uniqueEmail.validator");
let alunosModule = class alunosModule {
};
exports.alunosModule = alunosModule;
exports.alunosModule = alunosModule = __decorate([
    (0, common_1.Module)({
        controllers: [alunos_controller_1.alunosController],
        providers: [alunos_repository_1.alunosRepository, uniqueEmail_validator_1.UniqueEmailValidator]
    })
], alunosModule);
//# sourceMappingURL=alunos.module.js.map