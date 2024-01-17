"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.professoresModule = void 0;
const common_1 = require("@nestjs/common");
const professores_controller_1 = require("./professores.controller");
const professores_repository_1 = require("./professores.repository");
const uniqueEmailProfessor_validator_1 = require("./validacao/uniqueEmailProfessor.validator");
const passport_1 = require("@nestjs/passport");
let professoresModule = class professoresModule {
};
exports.professoresModule = professoresModule;
exports.professoresModule = professoresModule = __decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule.register({ defaultStrategy: 'jwt' })],
        controllers: [professores_controller_1.professoresController],
        providers: [professores_repository_1.professoresRepository, uniqueEmailProfessor_validator_1.verifyUniqueEmailProfessor]
    })
], professoresModule);
//# sourceMappingURL=professores.module.js.map