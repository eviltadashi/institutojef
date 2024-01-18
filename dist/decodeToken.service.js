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
exports.JwtDecripty = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("../prisma/src/generated/client/index.js");
const prisma = new client_1.PrismaClient();
let JwtDecripty = class JwtDecripty {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async decodeToken(token) {
        const payload = this.jwtService.decode(token);
        const email = payload.email;
        const aluno = await prisma.alunos.findUnique({ where: { email } });
        const professor = await prisma.professores.findUnique({ where: { email } });
        if (aluno && professor) {
            return 'professor';
        }
        else if (professor) {
            return 'professor';
        }
        else {
            return 'aluno';
        }
    }
};
exports.JwtDecripty = JwtDecripty;
exports.JwtDecripty = JwtDecripty = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], JwtDecripty);
//# sourceMappingURL=decodeToken.service.js.map