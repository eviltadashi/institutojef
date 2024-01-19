"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AulasModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const decodeToken_service_1 = require("../decodeToken.service");
const aulas_controller_1 = require("./aulas.controller");
const aulas_repository_1 = require("./aulas.repository");
let AulasModule = class AulasModule {
};
exports.AulasModule = AulasModule;
exports.AulasModule = AulasModule = __decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule.register({ defaultStrategy: 'jwt' }), jwt_1.JwtModule],
        controllers: [aulas_controller_1.AulasController],
        providers: [aulas_repository_1.AulasRepository, decodeToken_service_1.JwtDecripty]
    })
], AulasModule);
//# sourceMappingURL=aulas.module.js.map