"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const alunos_module_1 = require("./alunos/alunos.module");
const professores_module_1 = require("./professores/professores.module");
const cursos_module_1 = require("./cursos/cursos.module");
const vinculoAlunoCurso_module_1 = require("./vinculoAlunoCurso/vinculoAlunoCurso.module");
const aulas_module_1 = require("./aulas/aulas.module");
const auth_module_1 = require("./auth/auth.module");
const aulasConteudo_module_1 = require("./aulasConteudo/aulasConteudo.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            alunos_module_1.alunosModule,
            professores_module_1.professoresModule,
            cursos_module_1.cursosModule,
            vinculoAlunoCurso_module_1.VinculoAlunoCursoModule,
            aulasConteudo_module_1.AulasConteudoModule,
            aulas_module_1.AulasModule,
            auth_module_1.AuthModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map